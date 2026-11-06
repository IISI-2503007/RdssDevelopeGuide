# 維護規則（改任何內容前必讀）

> 章節排序另見 `_SECTION_ORDER_RULE.md`。

---

## ⚠️ 規則 1：改任何規範內容，必須更新「最後編輯日期」

位置：`src/views/Home.vue` header

```html
<span class="text-xs sm:text-sm text-gray-500">最後編輯日期：YYYY-MM-DD</span>
```

**這是全站共用欄位**，PG 靠它判斷手上的規範是不是最新版。忘記更新的後果是：規範已改但看的人以為沒變，繼續照舊做法施工。

適用範圍（三者任一有異動就要改）：

- `src/docs/*.md`
- `src/content/*.vue`
- `src/docs/assets/` 底下的範本

> 2026-08-10 曾因漏改此欄位而必須重新 commit、上板、部署一次。

---

## ⚠️ 規則 2：build 與 deploy 必須在 PowerShell 執行，不可用 Git Bash

```powershell
# ✅ PowerShell
npm run build
npm run deploy
```

```bash
# ❌ Git Bash：Segmentation fault，exit code 139
npm run build
```

**原因**：`node_modules/@rollup/` 底下同時安裝了 `rollup-win32-x64-gnu` 與 `rollup-win32-x64-msvc`。在 Git Bash（MSYS 環境）執行時 rollup 會誤判平台而載入 `gnu` 版原生套件，在 transform 完成後的產出階段崩潰。

**症狀**：`✓ 2848 modules transformed.` 之後直接 segfault，`dist/` 只有靜態檔沒有 JS bundle。與 `--minify false` 無關，兩種都會崩。

`npm run dev` 不受影響（不走 rollup 產出階段），Git Bash 可以跑。

### 附帶：`npm ci` 可能失敗

`npm ci` 會先刪除整個 `node_modules`，遇到檔案鎖定會失敗（`The operation was rejected by your operating system`）。改用 `npm install`，它不刪目錄。

---

## 規則 3：新增非 `.md` 的附件要同步加進下載包

`src/utils/downloadDocs.js` 只打包明列的檔案。新增 `src/docs/assets/` 底下的範本時，必須：

1. 以 `?raw` 匯入該檔
2. 加進 `assets` 陣列

否則畫面上寫「可下載取得」但 ZIP 裡沒有，PG 會找不到。

> 2026-08-10 曾發生 `assets/launch.json` 沒被打包，須補推一版。

---

## 規則 4：機敏值不寫進 `src/docs/`

`src/docs/*.md` 與 `src/docs/assets/` 屬 repo 原始檔，**不受網站密碼保護**（`PasswordGate` 只擋畫面）。

- 需要保護的內容放 `src/content/*.vue`，並在 `Home.vue` 的 sections 標 `protected: true`（現行做法見「測試環境」「測試帳號」兩章，兩者刻意沒有對應 `.md`）
- 範本類檔案一律去識別化：實際值改成 `<...>` 佔位符，並在檔內說明「去哪裡取值」

---

## 規則 5：顏色一律用色票變數，不寫死色碼（夜晚模式）

站台有白天／夜晚模式（標題列太陽／月亮鈕，`src/utils/theme.js`，html 加 `dark` class）。內容頁的顏色來自 `src/color-tokens.css` 的變數：

- 文字 `var(--c-text-<色相>-<深淺>)`、底色 `var(--c-bg-<色相>-<深淺>)`、框線 `var(--c-border-<色相>-<深淺>)`，例如 `color: var(--c-text-blue-800)`、`background: var(--c-bg-amber-100)`。
- 白天值就是 Tailwind 色票；夜晚值由同色相自動換成深色模式用的深淺（深字換淺字、淺底換深底）。

新增或修改 `src/content/*.vue` 時，**直接寫 `#1e40af` 這種色碼會在夜晚模式看不見**。寫完跑一次：

```powershell
python -X utf8 scripts\color-tokens.py
```

它會把 inline style 裡的色碼換成變數、重產 `color-tokens.css`，並列出對不到色票的色碼（要改成 Tailwind 色票內的顏色）。Tailwind 工具類（`bg-gray-100`、`text-slate-700`…）也由同一支腳本產生夜晚覆寫，不用另外處理。

檢查版面：`npm run build` 後 `npx vite preview --port 4173`，開 `http://localhost:4173/RdssDevelopeGuide/?theme=dark&expand=all`（`theme=light|dark` 指定模式、`expand=all` 或 `expand=section-3,section-5` 直接展開章節）。
