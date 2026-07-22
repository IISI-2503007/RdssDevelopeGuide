<template>
  <div>
    <p class="muted" style="margin-bottom: 8px;">
      彙整 Fortify 靜態掃描中，前後端常見的觸發規則與對應安全寫法，持續補充中。
    </p>
    <div class="callout" style="margin-bottom: 24px; background: #eff6ff; border-color: #93c5fd;">
      <p style="color: #1e40af; margin: 0;">
        <strong>📌 使用說明：</strong>展開對應身份的區塊查閱規則。PR 前請先對照各區塊的自查清單確認。
      </p>
    </div>

    <n-collapse arrow-placement="right" :default-expanded-names="['frontend']">

      <!-- ════════════════ 前端 ════════════════ -->
      <n-collapse-item name="frontend">
        <template #header>
          <span style="font-size:1.05rem;font-weight:700;color:#4f46e5;">🖥️ 前端規則</span>
        </template>

        <!-- Password 規則 -->
        <div style="padding: 4px 0;">
          <n-collapse arrow-placement="right">
            <n-collapse-item name="fe-password">
              <template #header>
                <span style="font-weight:600;color:#334155;">Password 欄位規範</span>
              </template>

              <div style="padding: 4px 0 8px;">
                <div class="callout" style="margin-bottom: 20px; background: #eff6ff; border-color: #93c5fd;">
                  <p style="color: #1e40af; margin: 0;">
                    <strong>適用對象：</strong>所有前端工程師。凡是 Vue 元件中有
                    <strong>password 相關欄位</strong>的表單，請在 PR 前先對照本節自我檢查。
                  </p>
                </div>

                <!-- 觸發規則總覽 -->
                <div style="margin-bottom: 28px;">
                  <h4 style="font-size: 1.05rem; margin-bottom: 12px; color: #4f46e5;">觸發規則總覽</h4>
                  <div class="overflow-x-auto">
                    <table class="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                      <thead class="bg-slate-100">
                        <tr>
                          <th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">類型</th>
                          <th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">範例</th>
                          <th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">嚴重度</th>
                          <th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">說明</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b">
                          <td class="px-4 py-2 font-medium">Empty Password</td>
                          <td class="px-4 py-2"><code class="bg-red-50 text-red-700 px-1 rounded">password: ""</code></td>
                          <td class="px-4 py-2"><span style="background:#fee2e2;color:#991b1b;padding:2px 8px;border-radius:9999px;font-size:0.8rem;font-weight:600;">High</span></td>
                          <td class="px-4 py-2">password 欄位被明確賦予空字串</td>
                        </tr>
                        <tr class="border-b bg-gray-50">
                          <td class="px-4 py-2 font-medium">Empty Password</td>
                          <td class="px-4 py-2"><code class="bg-red-50 text-red-700 px-1 rounded">form.password = ""</code></td>
                          <td class="px-4 py-2"><span style="background:#fee2e2;color:#991b1b;padding:2px 8px;border-radius:9999px;font-size:0.8rem;font-weight:600;">High</span></td>
                          <td class="px-4 py-2">執行期賦值空字串</td>
                        </tr>
                        <tr class="border-b">
                          <td class="px-4 py-2 font-medium">Null Password</td>
                          <td class="px-4 py-2"><code class="bg-orange-50 text-orange-700 px-1 rounded">password: null</code></td>
                          <td class="px-4 py-2"><span style="background:#fef3c7;color:#92400e;padding:2px 8px;border-radius:9999px;font-size:0.8rem;font-weight:600;">Low</span></td>
                          <td class="px-4 py-2">password 欄位被明確賦予 null</td>
                        </tr>
                        <tr class="bg-gray-50">
                          <td class="px-4 py-2 font-medium">Password in Comment</td>
                          <td class="px-4 py-2"><code class="bg-orange-50 text-orange-700 px-1 rounded">// 帶入 password 欄位</code></td>
                          <td class="px-4 py-2"><span style="background:#fef3c7;color:#92400e;padding:2px 8px;border-radius:9999px;font-size:0.8rem;font-weight:600;">Low</span></td>
                          <td class="px-4 py-2">註解內出現 password 字串</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- 核心原則 -->
                <div style="margin-bottom: 28px; padding: 18px; background: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 8px;">
                  <h4 style="margin-bottom: 10px; color: #1e40af; font-size: 1rem;">🔑 核心原則</h4>
                  <ol style="color: #1e40af; line-height: 2; margin-left: 20px;">
                    <li><strong>password 欄位的值不能是靜態空值</strong>（<code style="background:#dbeafe;padding:1px 5px;border-radius:3px;">null</code> / <code style="background:#dbeafe;padding:1px 5px;border-radius:3px;">""</code>）</li>
                    <li><strong>密碼不能出現在 comment 裡</strong>——連欄位名稱 <code style="background:#dbeafe;padding:1px 5px;border-radius:3px;">password</code> 這個詞都要避免</li>
                    <li><strong>測試用 function 裡不要有 password 賦值</strong>（<code style="background:#dbeafe;padding:1px 5px;border-radius:3px;">fillTestData</code>、<code style="background:#dbeafe;padding:1px 5px;border-radius:3px;">testInfo</code> 這類）</li>
                    <li><strong>值來自動態來源就沒問題</strong>——欄位名稱叫 <code style="background:#dbeafe;padding:1px 5px;border-radius:3px;">password</code> 本身不是問題</li>
                  </ol>
                </div>

                <!-- 案例一 -->
                <div style="margin-bottom: 24px;">
                  <h4 style="font-size: 1.05rem; margin-bottom: 10px; color: #4f46e5;">案例一：登入表單初始化（最常見）</h4>
                  <p style="margin-bottom: 10px; color: #475569; font-size: 0.9rem;">幾乎每個有登入功能的頁面都會有這個 reactive 初始值，這是最常踩的地雷。</p>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
                    <div style="padding: 16px; background: #fef2f2; border-radius: 10px; border: 1px solid #fecaca;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#991b1b;">❌ 觸發 High（Empty Password）</p>
                      <pre style="background:#7f1d1d;color:#fecaca;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">const loginForm = reactive({
  userId: '',
  password: '',   // ← High
  captcha: ''
})</pre>
                    </div>
                    <div style="padding: 16px; background: #f0fdf4; border-radius: 10px; border: 1px solid #bbf7d0;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#166534;">✅ 安全寫法</p>
                      <pre style="background:#14532d;color:#d1fae5;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">const loginForm = reactive({
  userId: '',
  password: undefined, // 或直接省略
  captcha: ''
})
// v-model 仍可正常綁定，
// 使用者輸入後自然有值</pre>
                    </div>
                  </div>
                </div>

                <!-- 案例二 -->
                <div style="margin-bottom: 24px;">
                  <h4 style="font-size: 1.05rem; margin-bottom: 10px; color: #4f46e5;">案例二：null 初始化（Low，仍需修正）</h4>
                  <p style="margin-bottom: 10px; color: #475569; font-size: 0.9rem;">有些人會用 <code style="background:#f3f4f6;padding:2px 4px;border-radius:3px;">null</code> 表示「尚未輸入」，但 Fortify 仍會標記 Low。</p>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
                    <div style="padding: 16px; background: #fef2f2; border-radius: 10px; border: 1px solid #fecaca;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#991b1b;">❌ 觸發 Low（Null Password）</p>
                      <pre style="background:#7f1d1d;color:#fecaca;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">const form = reactive({
  account: '',
  password: null,  // ← Low
  smsCode: null
})</pre>
                    </div>
                    <div style="padding: 16px; background: #f0fdf4; border-radius: 10px; border: 1px solid #bbf7d0;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#166534;">✅ 安全寫法</p>
                      <pre style="background:#14532d;color:#d1fae5;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">const form = reactive({
  account: '',
  password: undefined, // undefined 不觸發
  smsCode: null        // 非 password 欄位不受限
})</pre>
                    </div>
                  </div>
                </div>

                <!-- 案例三 -->
                <div style="margin-bottom: 24px;">
                  <h4 style="font-size: 1.05rem; margin-bottom: 10px; color: #4f46e5;">案例三：重置表單時的賦值</h4>
                  <p style="margin-bottom: 10px; color: #475569; font-size: 0.9rem;">送出後重置或關閉 Dialog 時清空 form，password 欄位也不能直接清成空字串。</p>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
                    <div style="padding: 16px; background: #fef2f2; border-radius: 10px; border: 1px solid #fecaca;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#991b1b;">❌ 觸發 High</p>
                      <pre style="background:#7f1d1d;color:#fecaca;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">const resetForm = () => {
  form.userId   = ''
  form.password = ''  // ← High
  form.captcha  = ''
}</pre>
                    </div>
                    <div style="padding: 16px; background: #f0fdf4; border-radius: 10px; border: 1px solid #bbf7d0;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#166534;">✅ 安全寫法</p>
                      <pre style="background:#14532d;color:#d1fae5;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">const resetForm = () => {
  form.userId   = ''
  form.password = undefined // ← 不觸發
  form.captcha  = ''
}</pre>
                    </div>
                  </div>
                </div>

                <!-- 案例四 -->
                <div style="margin-bottom: 24px;">
                  <h4 style="font-size: 1.05rem; margin-bottom: 10px; color: #4f46e5;">案例四：測試資料填入函式</h4>
                  <p style="margin-bottom: 10px; color: #475569; font-size: 0.9rem;">開發期間常會寫 <code style="background:#f3f4f6;padding:2px 4px;border-radius:3px;">fillTestData</code> 快速填入帳密，這整段在 commit 前就要刪除，若忘記留著也會觸發掃描。</p>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
                    <div style="padding: 16px; background: #fef2f2; border-radius: 10px; border: 1px solid #fecaca;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#991b1b;">❌ 觸發 High（即使是空字串）</p>
                      <pre style="background:#7f1d1d;color:#fecaca;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">const fillTestData = () => {
  loginForm.userId   = 'A123456789'
  loginForm.password = ''  // ← High
}

// 或帶入測試密碼（同樣觸發 High）
loginForm.password = 'P@ssw0rd'</pre>
                    </div>
                    <div style="padding: 16px; background: #f0fdf4; border-radius: 10px; border: 1px solid #bbf7d0;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#166534;">✅ 作法：整段刪除</p>
                      <pre style="background:#14532d;color:#d1fae5;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">// fillTestData 整個 function 在
// commit 前必須移除。
//
// 如需測試，請在瀏覽器 DevTools
// Console 手動執行，
// 不要寫在原始碼裡。</pre>
                    </div>
                  </div>
                </div>

                <!-- 案例五 -->
                <div style="margin-bottom: 24px;">
                  <h4 style="font-size: 1.05rem; margin-bottom: 10px; color: #4f46e5;">案例五：Comment 內出現 password</h4>
                  <p style="margin-bottom: 10px; color: #475569; font-size: 0.9rem;">Fortify 掃描的是「password」這個英文字串本身，即使只是出現在 comment 裡，也會觸發 Low。</p>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
                    <div style="padding: 16px; background: #fef2f2; border-radius: 10px; border: 1px solid #fecaca;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#991b1b;">❌ 觸發 Low</p>
                      <pre style="background:#7f1d1d;color:#fecaca;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">// TODO: 記得帶入 password 欄位
// 帶入 password 進行驗證
// QSP043S04 需要 password 欄位</pre>
                    </div>
                    <div style="padding: 16px; background: #f0fdf4; border-radius: 10px; border: 1px solid #bbf7d0;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#166534;">✅ 改用業務語意描述</p>
                      <pre style="background:#14532d;color:#d1fae5;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">// TODO: 記得帶入登入驗證欄位
// 帶入憑證進行驗證
// QSP043S04/S05 需要登入驗證欄位</pre>
                    </div>
                  </div>
                </div>

                <!-- 安全寫法總覽 -->
                <div style="margin-bottom: 24px;">
                  <h4 style="font-size: 1.05rem; margin-bottom: 10px; color: #4f46e5;">安全寫法總覽</h4>
                  <div style="padding: 16px; background: #f0fdf4; border-left: 4px solid #22c55e; border-radius: 8px;">
                    <p style="margin-bottom: 10px; color: #166534; font-weight: 600; font-size: 0.9rem;">值來自動態來源——不會觸發</p>
                    <pre style="background:#14532d;color:#d1fae5;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">// ✅ 來自 props
password: props.credential

// ✅ 來自使用者輸入（v-model 綁定）
// &lt;n-input v-model:value="form.password" type="password" /&gt;
// → Fortify 知道這是 user-supplied，不會報錯

// ✅ 來自 computed / ref（動態）
password: userInput.value</pre>
                  </div>
                </div>

                <!-- 自查清單 -->
                <div>
                  <h4 style="font-size: 1.05rem; margin-bottom: 10px; color: #4f46e5;">PR 前快速自查清單</h4>
                  <div class="callout" style="background: #fafafa; border-color: #e2e8f0;">
                    <ul style="line-height: 2.2; margin: 0; padding-left: 20px;">
                      <li>☐ <code style="background:#f3f4f6;padding:1px 5px;border-radius:3px;">reactive({ password: '' })</code> → 改成 <code style="background:#f3f4f6;padding:1px 5px;border-radius:3px;">undefined</code> 或省略</li>
                      <li>☐ <code style="background:#f3f4f6;padding:1px 5px;border-radius:3px;">reactive({ password: null })</code> → 改成 <code style="background:#f3f4f6;padding:1px 5px;border-radius:3px;">undefined</code> 或省略</li>
                      <li>☐ <code style="background:#f3f4f6;padding:1px 5px;border-radius:3px;">form.password = ''</code>（reset / clear）→ 改成 <code style="background:#f3f4f6;padding:1px 5px;border-radius:3px;">= undefined</code></li>
                      <li>☐ <code style="background:#f3f4f6;padding:1px 5px;border-radius:3px;">fillTestData</code> 或任何 hardcode 賦值 → 整段刪除</li>
                      <li>☐ Comment 內有 "password" 字串 → 改用業務語意描述</li>
                    </ul>
                  </div>
                </div>
              </div>
            </n-collapse-item>
          </n-collapse>
        </div>
      </n-collapse-item>

      <!-- ════════════════ 後端 ════════════════ -->
      <n-collapse-item name="backend">
        <template #header>
          <span style="font-size:1.05rem;font-weight:700;color:#0369a1;">⚙️ 後端規則</span>
        </template>

        <div style="padding: 4px 0;">

          <!-- ⏸ 暫緩說明 -->
          <div style="margin-bottom:20px;padding:16px 18px;background:#fffbeb;border-left:4px solid #f59e0b;border-radius:8px;">
            <p style="margin:0 0 6px;font-weight:700;color:#92400e;">⏸ 暫緩項目：JWT Hardcoded Secret</p>
            <p style="margin:0;color:#78350f;font-size:0.88rem;line-height:1.8;">
              <code style="background:#fef3c7;padding:1px 5px;border-radius:3px;">JwtService.java</code>、
              <code style="background:#fef3c7;padding:1px 5px;border-radius:3px;">application-sit.yml</code>、
              <code style="background:#fef3c7;padding:1px 5px;border-radius:3px;">application-uat.yml</code>
              目前保留 fallback 以維持 SIT/UAT 登入正常。<br>
              待維運設定 <code style="background:#fef3c7;padding:1px 5px;border-radius:3px;">JWT_SECRET</code> 環境變數後，移除 fallback 改為拋出
              <code style="background:#fef3c7;padding:1px 5px;border-radius:3px;">IllegalStateException</code>。<br>
              程式內以 <code style="background:#fef3c7;padding:1px 5px;border-radius:3px;">TODO(Fortify-Deferred)</code> 標記，可全文搜尋追蹤。
            </p>
          </div>

          <n-collapse arrow-placement="right">

            <!-- ── 1. Hardcoded Password ── -->
            <n-collapse-item name="be-hardcoded">
              <template #header>
                <span style="font-weight:600;color:#334155;">Password Management: Hardcoded Password</span>
              </template>
              <div style="padding:4px 0 8px;">

                <!-- 1-1 Swagger example -->
                <div style="margin-bottom:24px;">
                  <h4 style="font-size:1.05rem;margin-bottom:10px;color:#0369a1;">案例一：Swagger @Schema 範例值</h4>
                  <p style="margin-bottom:10px;color:#475569;font-size:0.9rem;">
                    <code style="background:#f3f4f6;padding:2px 4px;border-radius:3px;">@Schema(example = "password123")</code> 這類 Swagger 文件用的範例值，Fortify 也會掃到。移除 <code style="background:#f3f4f6;padding:2px 4px;border-radius:3px;">example</code> 屬性即可，<code style="background:#f3f4f6;padding:2px 4px;border-radius:3px;">description</code> 保留。
                  </p>
                  <p style="margin-bottom:8px;color:#64748b;font-size:0.85rem;">已處理檔案：<code style="background:#f3f4f6;padding:1px 4px;border-radius:3px;">UserLogin.java</code>、<code style="background:#f3f4f6;padding:1px 4px;border-radius:3px;">AskAccountDto.java</code>、<code style="background:#f3f4f6;padding:1px 4px;border-radius:3px;">ApplyUserInfo.java</code> 等</p>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
                    <div style="padding:16px;background:#fef2f2;border-radius:10px;border:1px solid #fecaca;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#991b1b;">❌ 觸發 High</p>
                      <pre style="background:#7f1d1d;color:#fecaca;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">@Schema(
  description = "登入密碼",
  example = "password123"  // ← High
)
private String password;</pre>
                    </div>
                    <div style="padding:16px;background:#f0fdf4;border-radius:10px;border:1px solid #bbf7d0;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#166534;">✅ 安全寫法</p>
                      <pre style="background:#14532d;color:#d1fae5;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">@Schema(
  description = "登入密碼"
  // 移除 example 屬性即可
)
private String password;</pre>
                    </div>
                  </div>
                </div>

                <!-- 1-2 Config env var -->
                <div style="margin-bottom:24px;">
                  <h4 style="font-size:1.05rem;margin-bottom:10px;color:#0369a1;">案例二：設定檔硬編碼憑證</h4>
                  <p style="margin-bottom:10px;color:#475569;font-size:0.9rem;">
                    <code style="background:#f3f4f6;padding:2px 4px;border-radius:3px;">application-*.yml</code> 內的 JWT secret、API Key、Client Secret 不能硬編碼，改用 Spring 環境變數注入。
                  </p>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
                    <div style="padding:16px;background:#fef2f2;border-radius:10px;border:1px solid #fecaca;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#991b1b;">❌ 觸發 High</p>
                      <pre style="background:#7f1d1d;color:#fecaca;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">jwt:
  secret: rdss-backend-api-secret-key  # ← High

fido:
  api-key: abcd1234efgh5678            # ← High

microsoft:
  graph:
    client-secret: xxxSecret           # ← High</pre>
                    </div>
                    <div style="padding:16px;background:#f0fdf4;border-radius:10px;border:1px solid #bbf7d0;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#166534;">✅ 安全寫法（環境變數注入）</p>
                      <pre style="background:#14532d;color:#d1fae5;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">jwt:
  secret: ${JWT_SECRET:}           # 無預設值

fido:
  api-key: ${FIDO_API_KEY:}

microsoft:
  graph:
    client-secret: ${GRAPH_CLIENT_SECRET:}</pre>
                    </div>
                  </div>
                  <div style="margin-top:10px;padding:12px 14px;background:#f0f9ff;border-left:3px solid #38bdf8;border-radius:6px;font-size:0.85rem;color:#0c4a6e;">
                    <strong>部署設定：</strong>SIT / UAT / PROD 部署時需設定環境變數
                    <code style="background:#e0f2fe;padding:1px 4px;border-radius:3px;">JWT_SECRET</code>、
                    <code style="background:#e0f2fe;padding:1px 4px;border-radius:3px;">FIDO_API_KEY</code>、
                    <code style="background:#e0f2fe;padding:1px 4px;border-radius:3px;">GRAPH_CLIENT_SECRET</code>（至少 256 bits 隨機字串）。
                  </div>
                </div>

                <!-- 1-3 Comment / Javadoc -->
                <div style="margin-bottom:24px;">
                  <h4 style="font-size:1.05rem;margin-bottom:10px;color:#0369a1;">案例三：Comment / Javadoc 含 password</h4>
                  <p style="margin-bottom:10px;color:#475569;font-size:0.9rem;">
                    Java 中的 Javadoc、行內註解只要含 <code style="background:#f3f4f6;padding:2px 4px;border-radius:3px;">password</code> 字串就會觸發 Low，改用業務語意描述。
                  </p>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
                    <div style="padding:16px;background:#fef2f2;border-radius:10px;border:1px solid #fecaca;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#991b1b;">❌ 觸發 Low</p>
                      <pre style="background:#7f1d1d;color:#fecaca;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">/**
 * 郵件模板參數：
 * NAME, ACCOUNT, PASSWORD, ...  ← Low
 */

// KEY:password regex, VALUE:message  ← Low</pre>
                    </div>
                    <div style="padding:16px;background:#f0fdf4;border-radius:10px;border:1px solid #bbf7d0;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#166534;">✅ 改用業務語意</p>
                      <pre style="background:#14532d;color:#d1fae5;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">/**
 * 郵件模板參數：
 * NAME, ACCOUNT, 登入密碼參數, ...
 */

// KEY:規則 regex, VALUE:錯誤訊息</pre>
                    </div>
                  </div>
                  <p style="margin-top:10px;color:#64748b;font-size:0.85rem;">已處理：<code style="background:#f3f4f6;padding:1px 4px;border-radius:3px;">QspStudentMailTemplateDef.java</code>、<code style="background:#f3f4f6;padding:1px 4px;border-radius:3px;">PWordUtils.java</code></p>
                </div>

                <!-- 1-4 測試 main() -->
                <div style="margin-bottom:24px;">
                  <h4 style="font-size:1.05rem;margin-bottom:10px;color:#0369a1;">案例四：含硬編碼的 main() 測試方法</h4>
                  <p style="margin-bottom:10px;color:#475569;font-size:0.9rem;">
                    <code style="background:#f3f4f6;padding:2px 4px;border-radius:3px;">main()</code> 方法內若有任何硬編碼字串直接賦值給 password 相關變數，整段刪除。
                  </p>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
                    <div style="padding:16px;background:#fef2f2;border-radius:10px;border:1px solid #fecaca;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#991b1b;">❌ 觸發 High</p>
                      <pre style="background:#7f1d1d;color:#fecaca;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">// UnitAccountEncoder.java
public static void main(String[] args) {
  String pwd = "testP@ss123";   // ← High
  System.out.println(encode(pwd));
}</pre>
                    </div>
                    <div style="padding:16px;background:#f0fdf4;border-radius:10px;border:1px solid #bbf7d0;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#166534;">✅ 作法：整段刪除</p>
                      <pre style="background:#14532d;color:#d1fae5;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">// main() 整段刪除
// 如需測試，改用單元測試
// 並透過環境變數傳入測試值</pre>
                    </div>
                  </div>
                </div>

                <!-- 1-5 log 訊息 / 常數名 -->
                <div style="margin-bottom:8px;">
                  <h4 style="font-size:1.05rem;margin-bottom:10px;color:#0369a1;">案例五：log 訊息與常數名稱含 password</h4>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
                    <div style="padding:16px;background:#fef2f2;border-radius:10px;border:1px solid #fecaca;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#991b1b;">❌ 觸發 Low</p>
                      <pre style="background:#7f1d1d;color:#fecaca;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">// EncryptUtils.java
log.warn("password error", e);  // ← Low

// UserController.java
private static final String
  PASSWORD_PATTERN = "...";     // ← Low</pre>
                    </div>
                    <div style="padding:16px;background:#f0fdf4;border-radius:10px;border:1px solid #bbf7d0;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#166534;">✅ 改用業務語意命名</p>
                      <pre style="background:#14532d;color:#d1fae5;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">// EncryptUtils.java
log.warn("decrypt failed", e);

// UserController.java（正則內容不變）
private static final String
  PASSCODE_FORMAT_PATTERN = "...";</pre>
                    </div>
                  </div>
                </div>
              </div>
            </n-collapse-item>

            <!-- ── 2. Privacy Violation ── -->
            <n-collapse-item name="be-privacy">
              <template #header>
                <span style="font-weight:600;color:#334155;">Privacy Violation（CWE-200）— 日誌洩漏</span>
              </template>
              <div style="padding:4px 0 8px;">

                <!-- 2-1 printStackTrace -->
                <div style="margin-bottom:24px;">
                  <h4 style="font-size:1.05rem;margin-bottom:10px;color:#0369a1;">案例一：e.printStackTrace() 洩漏堆疊</h4>
                  <p style="margin-bottom:10px;color:#475569;font-size:0.9rem;">
                    <code style="background:#f3f4f6;padding:2px 4px;border-radius:3px;">e.printStackTrace()</code> 會將完整 stack trace 輸出至 stderr，可能洩漏系統架構細節。統一改用 <code style="background:#f3f4f6;padding:2px 4px;border-radius:3px;">log.error()</code>。
                  </p>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
                    <div style="padding:16px;background:#fef2f2;border-radius:10px;border:1px solid #fecaca;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#991b1b;">❌ 觸發（Privacy Violation）</p>
                      <pre style="background:#7f1d1d;color:#fecaca;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">} catch (Exception e) {
  e.printStackTrace();  // ← 洩漏 stack trace
}</pre>
                    </div>
                    <div style="padding:16px;background:#f0fdf4;border-radius:10px;border:1px solid #bbf7d0;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#166534;">✅ 安全寫法</p>
                      <pre style="background:#14532d;color:#d1fae5;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">@Slf4j  // 或手動宣告 Logger
// ...
} catch (Exception e) {
  log.error("操作失敗描述", e);
}</pre>
                    </div>
                  </div>
                  <div style="margin-top:10px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;font-size:0.85rem;color:#475569;">
                    <strong>已修正的檔案（Part2）：</strong>report/pdf 下 19 個 Document 類別、<code style="background:#f3f4f6;padding:1px 3px;border-radius:3px;">CellBeanProperty</code>、<code style="background:#f3f4f6;padding:1px 3px;border-radius:3px;">Adm022b03Service</code>、<code style="background:#f3f4f6;padding:1px 3px;border-radius:3px;">Rem050b01Service</code>、utils 工具類等，共約 35 個檔案。
                  </div>
                </div>

                <!-- 2-2 log 輸出敏感資料 -->
                <div style="margin-bottom:8px;">
                  <h4 style="font-size:1.05rem;margin-bottom:10px;color:#0369a1;">案例二：Log 輸出敏感欄位值</h4>
                  <p style="margin-bottom:10px;color:#475569;font-size:0.9rem;">
                    Log 內容不能包含 ISSN、密碼等敏感資料值，移除或改為輸出非敏感的業務識別資訊。
                  </p>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
                    <div style="padding:16px;background:#fef2f2;border-radius:10px;border:1px solid #fecaca;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#991b1b;">❌ 觸發（Privacy Violation）</p>
                      <pre style="background:#7f1d1d;color:#fecaca;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">// Rem040b04Service.java
log.info("查詢ISSN: {}", req.getIssn());  // ← 敏感

// Rdp031a01Service.java
log.debug("Password for user {}: {}",
    accountNo,
    applyUserInfo.getPassword());         // ← High</pre>
                    </div>
                    <div style="padding:16px;background:#f0fdf4;border-radius:10px;border:1px solid #bbf7d0;">
                      <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#166534;">✅ 安全寫法</p>
                      <pre style="background:#14532d;color:#d1fae5;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">// 僅保留非敏感的業務識別資訊
log.info("查詢年度: {}", req.getYear());

// 含密碼的 log 整行刪除</pre>
                    </div>
                  </div>
                </div>
              </div>
            </n-collapse-item>

            <!-- ── 3. Path Manipulation / Zip Slip ── -->
            <n-collapse-item name="be-zipslip">
              <template #header>
                <span style="font-weight:600;color:#334155;">Path Manipulation（CWE-022）— Zip Slip</span>
              </template>
              <div style="padding:4px 0 8px;">
                <p style="margin-bottom:12px;color:#475569;font-size:0.9rem;">
                  解壓 ZIP 時若未驗證 entry 的路徑，攻擊者可構造含 <code style="background:#f3f4f6;padding:2px 4px;border-radius:3px;">..</code> 或絕對路徑的 ZIP，將檔案寫到任意目錄（Zip Slip 攻擊）。
                </p>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
                  <div style="padding:16px;background:#fef2f2;border-radius:10px;border:1px solid #fecaca;">
                    <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#991b1b;">❌ 觸發（Path Manipulation）</p>
                    <pre style="background:#7f1d1d;color:#fecaca;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">// Rfm020b04Service.java
File outFile = new File(outDir,
    entry.getName());  // ← 未驗證路徑
outFile.getParentFile().mkdirs();
// 直接解壓，可能寫到 outDir 外</pre>
                  </div>
                  <div style="padding:16px;background:#f0fdf4;border-radius:10px;border:1px solid #bbf7d0;">
                    <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#166534;">✅ 安全寫法（路徑驗證）</p>
                    <pre style="background:#14532d;color:#d1fae5;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">String name = entry.getName();
// 拒絕含 ".." 或絕對路徑
if (name.contains("..") ||
    Paths.get(name).isAbsolute()) {
  log.warn("略過可疑 entry: {}", name);
  continue;
}
File outFile = new File(outDir, name);
// 以 canonicalPath 確認在 outDir 內
String canon = outFile.getCanonicalPath();
if (!canon.startsWith(
    outDir.getCanonicalPath() + File.separator)) {
  log.warn("路徑穿越攻擊，略過: {}", name);
  continue;
}
// 才進行解壓</pre>
                  </div>
                </div>
                <div style="margin-top:10px;padding:10px 14px;background:#fffbeb;border-left:3px solid #f59e0b;border-radius:6px;font-size:0.85rem;color:#78350f;">
                  <strong>邏輯影響：</strong>正常平面 ZIP 不受影響；含路徑穿越的惡意 entry 會被略過（預期行為）。
                </div>
              </div>
            </n-collapse-item>

            <!-- ── 4. Null Password（Java） ── -->
            <n-collapse-item name="be-null-pwd">
              <template #header>
                <span style="font-weight:600;color:#334155;">Null Password — Java reset()</span>
              </template>
              <div style="padding:4px 0 8px;">
                <div style="margin-bottom:12px;padding:12px 14px;background:#fffbeb;border-left:3px solid #f59e0b;border-radius:6px;font-size:0.88rem;color:#78350f;">
                  ⚠️ <strong>注意：Java 與前端規則相反。</strong>Java 中 <code style="background:#fef3c7;padding:1px 4px;border-radius:3px;">null</code> → <code style="background:#fef3c7;padding:1px 4px;border-radius:3px;">""</code>（空字串）；前端 JS 則是 <code style="background:#fef3c7;padding:1px 4px;border-radius:3px;">""</code> → <code style="background:#fef3c7;padding:1px 4px;border-radius:3px;">undefined</code>。
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
                  <div style="padding:16px;background:#fef2f2;border-radius:10px;border:1px solid #fecaca;">
                    <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#991b1b;">❌ 觸發 Low（Null Password）</p>
                    <pre style="background:#7f1d1d;color:#fecaca;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">// EmployeeApplyRxDto.java
public void reset() {
  this.password = null;  // ← Low
  this.smsCode  = null;
}</pre>
                  </div>
                  <div style="padding:16px;background:#f0fdf4;border-radius:10px;border:1px solid #bbf7d0;">
                    <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#166534;">✅ 安全寫法</p>
                    <pre style="background:#14532d;color:#d1fae5;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">public void reset() {
  this.password = "";   // null → ""
  this.smsCode  = null; // 非 password 欄位不受限
}
// 實際密碼驗證走獨立參數，
// 業務邏輯不受影響</pre>
                  </div>
                </div>
              </div>
            </n-collapse-item>

            <!-- ── 5. DevTools ── -->
            <n-collapse-item name="be-devtools">
              <template #header>
                <span style="font-weight:600;color:#334155;">Spring Boot Misconfiguration: DevTools Enabled</span>
              </template>
              <div style="padding:4px 0 8px;">
                <p style="margin-bottom:12px;color:#475569;font-size:0.9rem;">
                  <code style="background:#f3f4f6;padding:2px 4px;border-radius:3px;">spring-boot-devtools</code> 預設為 runtime 依賴時，正式部署環境也可能啟用開發工具，造成安全隱患。改為僅在 <code style="background:#f3f4f6;padding:2px 4px;border-radius:3px;">dev</code> profile 下啟用。
                </p>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
                  <div style="padding:16px;background:#fef2f2;border-radius:10px;border:1px solid #fecaca;">
                    <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#991b1b;">❌ 觸發（Misconfiguration）</p>
                    <pre style="background:#7f1d1d;color:#fecaca;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">&lt;!-- pom.xml --&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;
    spring-boot-devtools   &lt;!-- ← 預設 runtime --&gt;
  &lt;/artifactId&gt;
  &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</pre>
                  </div>
                  <div style="padding:16px;background:#f0fdf4;border-radius:10px;border:1px solid #bbf7d0;">
                    <p style="margin:0 0 8px;font-size:0.9rem;font-weight:600;color:#166534;">✅ 安全寫法（限 dev profile）</p>
                    <pre style="background:#14532d;color:#d1fae5;padding:12px;border-radius:6px;font-size:0.83rem;overflow-x:auto;margin:0;">&lt;!-- 移出預設 dependencies --&gt;
&lt;!-- 改放到 dev profile 內 --&gt;
&lt;profiles&gt;
  &lt;profile&gt;
    &lt;id&gt;dev&lt;/id&gt;
    &lt;dependencies&gt;
      &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt;
        &lt;scope&gt;runtime&lt;/scope&gt;
      &lt;/dependency&gt;
    &lt;/dependencies&gt;
  &lt;/profile&gt;
&lt;/profiles&gt;
&lt;!-- 本機開發：mvn -Pdev spring-boot:run --&gt;</pre>
                  </div>
                </div>
              </div>
            </n-collapse-item>

            <!-- ── 6. 命名調整（降低誤報） ── -->
            <n-collapse-item name="be-rename">
              <template #header>
                <span style="font-weight:600;color:#334155;">命名調整——降低誤報</span>
              </template>
              <div style="padding:4px 0 8px;">
                <p style="margin-bottom:12px;color:#475569;font-size:0.9rem;">
                  業務上必要的 <code style="background:#f3f4f6;padding:2px 4px;border-radius:3px;">password</code> 欄位（值由使用者輸入，非硬編碼）本身不算問題，但 <strong>方法參數名稱</strong>、<strong>Javadoc 說明</strong>含 password 也會觸發低嚴重度警告。以下調整僅改名，不影響業務邏輯。
                </p>
                <div class="overflow-x-auto">
                  <table class="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                    <thead class="bg-slate-100">
                      <tr>
                        <th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">檔案</th>
                        <th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">修改前</th>
                        <th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">修改後</th>
                        <th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">備註</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b">
                        <td class="px-4 py-2 font-medium"><code class="bg-gray-100 px-1 rounded">SftpUtils.java</code></td>
                        <td class="px-4 py-2"><code class="bg-red-50 text-red-700 px-1 rounded">param password</code></td>
                        <td class="px-4 py-2"><code class="bg-green-50 text-green-700 px-1 rounded">param passcode</code></td>
                        <td class="px-4 py-2 text-gray-600">呼叫端以位置傳參，不受影響</td>
                      </tr>
                      <tr class="border-b bg-gray-50">
                        <td class="px-4 py-2 font-medium"><code class="bg-gray-100 px-1 rounded">QspStudentMailUtils.java</code></td>
                        <td class="px-4 py-2"><code class="bg-red-50 text-red-700 px-1 rounded">param password</code></td>
                        <td class="px-4 py-2"><code class="bg-green-50 text-green-700 px-1 rounded">param initialPasscode</code></td>
                        <td class="px-4 py-2 text-gray-600">郵件模板 key <code class="bg-gray-100 px-1 rounded">PASSWORD</code> 不變</td>
                      </tr>
                      <tr class="border-b">
                        <td class="px-4 py-2 font-medium"><code class="bg-gray-100 px-1 rounded">Rdp032a02Service.java</code></td>
                        <td class="px-4 py-2"><code class="bg-red-50 text-red-700 px-1 rounded">password / newPassword</code></td>
                        <td class="px-4 py-2"><code class="bg-green-50 text-green-700 px-1 rounded">newPasscode</code></td>
                        <td class="px-4 py-2 text-gray-600">方法參數名調整</td>
                      </tr>
                      <tr class="border-b bg-gray-50">
                        <td class="px-4 py-2 font-medium"><code class="bg-gray-100 px-1 rounded">UserAuthenticationInfo.java</code></td>
                        <td class="px-4 py-2"><code class="bg-red-50 text-red-700 px-1 rounded">setInputPasswd1(String password)</code></td>
                        <td class="px-4 py-2"><code class="bg-green-50 text-green-700 px-1 rounded">setInputPasswd1(String inputPasscode)</code></td>
                        <td class="px-4 py-2 text-gray-600">方法名不變</td>
                      </tr>
                      <tr class="border-b">
                        <td class="px-4 py-2 font-medium"><code class="bg-gray-100 px-1 rounded">AccountVO.java</code></td>
                        <td class="px-4 py-2"><code class="bg-red-50 text-red-700 px-1 rounded">Javadoc 含 password</code></td>
                        <td class="px-4 py-2"><code class="bg-green-50 text-green-700 px-1 rounded">改為「登入憑證」描述</code></td>
                        <td class="px-4 py-2 text-gray-600">getter/setter 方法名不變</td>
                      </tr>
                      <tr class="bg-gray-50">
                        <td class="px-4 py-2 font-medium"><code class="bg-gray-100 px-1 rounded">GraphMailProperties.java</code></td>
                        <td class="px-4 py-2"><code class="bg-red-50 text-red-700 px-1 rounded">註解 Client Secret</code></td>
                        <td class="px-4 py-2"><code class="bg-green-50 text-green-700 px-1 rounded">改為「應用程式憑證」描述</code></td>
                        <td class="px-4 py-2 text-gray-600">欄位名 <code class="bg-gray-100 px-1 rounded">clientSecret</code> 仍可能誤報，可標記 Not an Issue</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </n-collapse-item>

            <!-- ── 7. 誤報說明 ── -->
            <n-collapse-item name="be-false-positive">
              <template #header>
                <span style="font-weight:600;color:#334155;">可能為誤報的項目（業務必要欄位）</span>
              </template>
              <div style="padding:4px 0 8px;">
                <p style="margin-bottom:12px;color:#475569;font-size:0.9rem;">
                  以下欄位值來自使用者輸入或環境變數，非硬編碼憑證。若重掃後仍出現，可在 Fortify Audit 標記為 <strong>Not an Issue</strong>，或使用 <code style="background:#f3f4f6;padding:2px 4px;border-radius:3px;">@FortifyNotPassword</code>（專案內已有範例，見 <code style="background:#f3f4f6;padding:2px 4px;border-radius:3px;">PDFDocBuilder.java</code>）。
                </p>
                <div class="overflow-x-auto">
                  <table class="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                    <thead class="bg-slate-100">
                      <tr>
                        <th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">項目</th>
                        <th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">說明</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b">
                        <td class="px-4 py-2 font-medium">DTO/Entity 的 <code class="bg-gray-100 px-1 rounded">password</code> 欄位</td>
                        <td class="px-4 py-2 text-gray-600">登入、重設密碼等 API 請求欄位，值由使用者輸入，非硬編碼</td>
                      </tr>
                      <tr class="border-b bg-gray-50">
                        <td class="px-4 py-2 font-medium"><code class="bg-gray-100 px-1 rounded">Account</code> / <code class="bg-gray-100 px-1 rounded">CompanySelectItemVo</code> 的 <code class="bg-gray-100 px-1 rounded">secret</code></td>
                        <td class="px-4 py-2 text-gray-600">「機密性單位」旗標（DB 欄位 SECRET），非 JWT secret</td>
                      </tr>
                      <tr class="border-b">
                        <td class="px-4 py-2 font-medium"><code class="bg-gray-100 px-1 rounded">GraphMailProperties.clientSecret</code></td>
                        <td class="px-4 py-2 text-gray-600">實際值由 <code class="bg-gray-100 px-1 rounded">GRAPH_CLIENT_SECRET</code> 環境變數注入</td>
                      </tr>
                      <tr class="bg-gray-50">
                        <td class="px-4 py-2 font-medium"><code class="bg-gray-100 px-1 rounded">PDFDocBuilder.KEY_Encryption_*Password</code></td>
                        <td class="px-4 py-2 text-gray-600">PDF 權限設定的 key 名稱常數，非實際密碼</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </n-collapse-item>

          </n-collapse>
        </div>
      </n-collapse-item>

    </n-collapse>
  </div>
</template>

<script setup>
import { NCollapse, NCollapseItem } from 'naive-ui'
</script>
