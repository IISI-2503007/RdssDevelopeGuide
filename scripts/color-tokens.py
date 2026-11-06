# 把 src/content/*.vue 內 inline style 的寫死色碼換成 CSS 變數(--c-text-*/--c-bg-*/--c-border-*),
# 並依 Tailwind 色票產生 src/color-tokens.css:白天值 = 原色碼,夜晚值 = 同色相換成深色模式用的深淺。
# 也產生 .dark 下 Tailwind 工具類(bg-*/text-*/border-*)的覆寫。
# 可重複執行:已換成 var() 的不會再動;新增內容若又寫了色碼,再跑一次即可。
# 用 python -X utf8 scripts/color-tokens.py
import io, os, re, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "src")

SHADES = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"]
PALETTE = {
    "slate":   "f8fafc f1f5f9 e2e8f0 cbd5e1 94a3b8 64748b 475569 334155 1e293b 0f172a 020617",
    "gray":    "f9fafb f3f4f6 e5e7eb d1d5db 9ca3af 6b7280 4b5563 374151 1f2937 111827 030712",
    "neutral": "fafafa f5f5f5 e5e5e5 d4d4d4 a3a3a3 737373 525252 404040 262626 171717 0a0a0a",
    "red":     "fef2f2 fee2e2 fecaca fca5a5 f87171 ef4444 dc2626 b91c1c 991b1b 7f1d1d 450a0a",
    "orange":  "fff7ed ffedd5 fed7aa fdba74 fb923c f97316 ea580c c2410c 9a3412 7c2d12 431407",
    "amber":   "fffbeb fef3c7 fde68a fcd34d fbbf24 f59e0b d97706 b45309 92400e 78350f 451a03",
    "green":   "f0fdf4 dcfce7 bbf7d0 86efac 4ade80 22c55e 16a34a 15803d 166534 14532d 052e16",
    "emerald": "ecfdf5 d1fae5 a7f3d0 6ee7b7 34d399 10b981 059669 047857 065f46 064e3b 022c22",
    "sky":     "f0f9ff e0f2fe bae6fd 7dd3fc 38bdf8 0ea5e9 0284c7 0369a1 075985 0c4a6e 082f49",
    "blue":    "eff6ff dbeafe bfdbfe 93c5fd 60a5fa 3b82f6 2563eb 1d4ed8 1e40af 1e3a8a 172554",
    "indigo":  "eef2ff e0e7ff c7d2fe a5b4fc 818cf8 6366f1 4f46e5 4338ca 3730a3 312e81 1e1b4b",
    "violet":  "f5f3ff ede9fe ddd6fe c4b5fd a78bfa 8b5cf6 7c3aed 6d28d9 5b21b6 4c1d95 2e1065",
    "rose":    "fff1f2 ffe4e6 fecdd3 fda4af fb7185 f43f5e e11d48 be123c 9f1239 881337 4c0519",
    "yellow":  "fefce8 fef9c3 fef08a fde047 facc15 eab308 ca8a04 a16207 854d0e 713f12 422006",
}
HEX2TOKEN = {}
TOKEN2HEX = {}
for hue, s in PALETTE.items():
    for shade, h in zip(SHADES, s.split()):
        HEX2TOKEN["#" + h] = (hue, shade)
        TOKEN2HEX[(hue, shade)] = "#" + h
# 非 Tailwind 的自訂色碼,就近歸類
ALIAS = {
    "#1f2a37": ("slate", "800"),   # 全站 --text 的值
    "#fee": ("red", "50"),
    "#eef0f3": ("gray", "100"),
    "#fff": "white", "#ffffff": "white", "white": "white",
}
NEUTRAL = {"slate", "gray", "neutral"}

# 夜晚模式對應:頁底 slate-900、卡片 slate-800
DARK_TEXT, DARK_MUTED = "#e2e8f0", "#94a3b8"
DARK_SURFACE = {"white": "#1e293b", "50": "#1e293b", "100": "#273449", "200": "#334155", "300": "#475569"}
DARK_NEUTRAL_BORDER = {"50": "#334155", "100": "#334155", "200": "#334155", "300": "#475569"}


def dark_value(role, hue, shade):
    if hue == "white":
        return {"bg": DARK_SURFACE["white"], "text": "#ffffff", "border": "#334155"}[role]
    n = int(shade)
    if role == "text":
        if hue in NEUTRAL:
            return DARK_TEXT if n >= 700 else (DARK_MUTED if n >= 500 else TOKEN2HEX[(hue, shade)])
        if n >= 600:
            return TOKEN2HEX[(hue, "300")]
        if n == 500:
            return TOKEN2HEX[(hue, "400")]
        return TOKEN2HEX[(hue, shade)]
    if role == "bg":
        if hue in NEUTRAL:
            return DARK_SURFACE.get(shade, TOKEN2HEX[(hue, shade)])
        flip = {"50": "950", "100": "900", "200": "800", "300": "700"}
        return TOKEN2HEX[(hue, flip[shade])] if shade in flip else TOKEN2HEX[(hue, shade)]
    if role == "border":
        if hue in NEUTRAL:
            return DARK_NEUTRAL_BORDER.get(shade, TOKEN2HEX[(hue, shade)])
        return TOKEN2HEX[(hue, "700")] if n <= 300 else TOKEN2HEX[(hue, shade)]
    raise ValueError(role)


def classify(color):
    c = color.lower()
    if c in ALIAS:
        v = ALIAS[c]
        return ("white", "") if v == "white" else v
    if c in HEX2TOKEN:
        return HEX2TOKEN[c]
    return None


used = {}      # (role, hue, shade) -> light hex
unknown = set()


def token_for(role, color):
    t = classify(color)
    if t is None:
        unknown.add(color)
        return None
    hue, shade = t
    key = (role, hue, shade)
    used[key] = "#ffffff" if hue == "white" else TOKEN2HEX[(hue, shade)]
    return f"var(--c-{role}-{hue}{'-' + shade if shade else ''})"


ROLE_OF = [(re.compile(r"^color$"), "text"), (re.compile(r"^background(-color)?$"), "bg"), (re.compile(r"^border"), "border")]
COLOR_TOKEN = re.compile(r"#[0-9a-fA-F]{3,6}\b|\bwhite\b")


def convert_declarations(style_text):
    def fix_decl(m):
        prop, val = m.group(1).strip().lower(), m.group(2)
        role = next((r for rx, r in ROLE_OF if rx.match(prop)), None)
        if role is None or "var(--" in val and not COLOR_TOKEN.search(val):
            return m.group(0)
        def sub_color(cm):
            tok = token_for(role, cm.group(0))
            return tok if tok else cm.group(0)
        return m.group(1) + ":" + COLOR_TOKEN.sub(sub_color, val)
    return re.sub(r"([a-zA-Z-]+)\s*:([^;\"']*)", fix_decl, style_text)


def convert_file(path):
    src = io.open(path, encoding="utf-8", newline="").read()
    out = re.sub(r'style="([^"]*)"', lambda m: 'style="' + convert_declarations(m.group(1)) + '"', src)
    if out != src:
        io.open(path, "w", encoding="utf-8", newline="").write(out)
        return True
    return False


changed = []
for p in sorted(glob.glob(os.path.join(SRC, "content", "*.vue"))):
    if convert_file(p):
        changed.append(os.path.basename(p))

# 兩處不是 style 屬性的寫死色碼
specials = [
    (os.path.join(SRC, "content", "TestAccounts.vue"), "background: #eef0f3;", "background: var(--c-bg-gray-100);", ("bg", "#eef0f3")),
    (os.path.join(SRC, "content", "PasswordGate.vue"), "'1.5px solid #e2e8f0'", "'1.5px solid var(--c-border-slate-200)'", ("border", "#e2e8f0")),
    (os.path.join(SRC, "content", "PasswordGate.vue"), "'1.5px solid #ef4444'", "'1.5px solid var(--c-border-red-500)'", ("border", "#ef4444")),
]
for path, old, new, (role, color) in specials:
    s = io.open(path, encoding="utf-8", newline="").read()
    if old in s:
        s = s.replace(old, new)
        io.open(path, "w", encoding="utf-8", newline="").write(s)
        changed.append(os.path.basename(path) + "(special)")
    token_for(role, color)

# Tailwind 工具類:掃實際用到的,產生 .dark 覆寫
cls_rx = re.compile(r"\b(hover:)?(bg|text|border)-(white|black|gray|slate|neutral|indigo|blue|green|red|yellow|amber|emerald|rose|orange|sky|violet)(?:-(50|100|200|300|400|500|600|700|800|900|950))?\b")
tw = set()
for p in glob.glob(os.path.join(SRC, "**", "*.vue"), recursive=True):
    for m in cls_rx.finditer(io.open(p, encoding="utf-8").read()):
        tw.add(m.groups())

lines = ["/* 由 scripts/color-tokens.py 產生,不要手改;白天值 = Tailwind 色票,夜晚值依同色相換深淺 */", ""]
lines.append(":root {")
for (role, hue, shade), light in sorted(used.items()):
    lines.append(f"  --c-{role}-{hue}{'-' + shade if shade else ''}: {light};")
lines.append("}")
lines.append("")
lines.append(":root.dark {")
for (role, hue, shade), light in sorted(used.items()):
    lines.append(f"  --c-{role}-{hue}{'-' + shade if shade else ''}: {dark_value(role, hue, shade)};")
lines.append("}")
lines.append("")
lines.append("/* Tailwind 工具類在夜晚模式的對應(只列內容頁實際用到的) */")
prop_of = {"bg": "background-color", "text": "color", "border": "border-color"}
for hover, kind, hue, shade in sorted(tw, key=lambda t: (t[1], t[2], t[3] or "", t[0] or "")):
    if hue == "black" or (hue == "white" and kind == "text"):
        continue
    if hue == "white":
        val = dark_value(kind, "white", "")
    else:
        n = int(shade)
        if kind == "bg" and n >= 400:
            continue
        if kind == "text" and n <= 300:
            continue
        if kind == "border" and n >= 400:
            continue
        val = dark_value(kind, hue, shade)
    name = f"{kind}-{hue}" + (f"-{shade}" if shade else "")
    sel = f".dark .hover\\:{name}:hover" if hover else f".dark .{name}"
    lines.append(f"{sel} {{ {prop_of[kind]}: {val}; }}")
lines.append("")
io.open(os.path.join(SRC, "color-tokens.css"), "w", encoding="utf-8", newline="").write("\n".join(lines))

print("changed:", ", ".join(changed) or "(none)")
print("tokens:", len(used), " tailwind rules:", len(tw))
print("unknown colors:", ", ".join(sorted(unknown)) or "(none)")
