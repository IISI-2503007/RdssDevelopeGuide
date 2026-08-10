<template>
  <div class="official-source-links">
    <p class="muted" style="margin-bottom: 24px;">
      RDSS 新 API 只有無敏感資料、無副作用的簡單查詢使用 GET；敏感／複合查詢及新增、修改、刪除等業務動作使用 POST。SSDLC 並未要求所有 API 一律 POST，也未要求必須使用 PUT／PATCH／DELETE。
    </p>

    <p style="margin-bottom: 24px; padding: 12px 16px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; color: #475569; font-size: 0.9rem; line-height: 1.7;">
      <strong>引用說明：</strong>外部連結是安全控制依據；RDSS 的 method 決策、生效範圍與過渡順序，是依現有架構制定的落地方式，不代表外部規範逐字指定 RDSS 的 endpoint 或程式寫法。
    </p>

    <div style="margin-bottom: 32px; padding: 20px; background: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 8px;">
      <h4 style="margin-bottom: 12px; color: #1e40af; font-size: 1.1rem;">規範更正</h4>
      <ul style="color: #1e40af; line-height: 1.8; margin-left: 20px;">
        <li>NIST SSDF 是可依風險、成本與可行性調整的安全開發流程框架，沒有指定 HTTP method。（<a href="https://csrc.nist.gov/pubs/sp/800/218/final" target="_blank" rel="noopener noreferrer">NIST SP 800-218</a>）</li>
        <li>CWE-598 與 OWASP ASVS 管制的是敏感資料不得出現在 URL，不是禁止 GET。（<a href="https://cwe.mitre.org/data/definitions/598.html" target="_blank" rel="noopener noreferrer">CWE-598</a>、<a href="https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md" target="_blank" rel="noopener noreferrer">ASVS 14.2.1</a>）</li>
        <li>GET 與 POST 都必須使用 HTTPS；POST Body 的優點是資料不成為 URL 的一部分，不是只有 POST 才受加密。（<a href="https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html#https" target="_blank" rel="noopener noreferrer">OWASP REST Security</a>）</li>
        <li>GET 必須無副作用；授權、輸入驗證、log 與 cache 控制不會因使用 POST 而自動完成。（<a href="https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2" target="_blank" rel="noopener noreferrer">RFC 9110 §9.2</a>）</li>
      </ul>
    </div>

    <div style="margin-bottom: 36px;">
      <h3 style="font-size: 1.25rem; margin-bottom: 16px; color: var(--text);">HTTP method 決策表</h3>
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th>情境</th>
              <th>method</th>
              <th>參數位置與條件</th>
              <th>官方參考</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>無副作用、無敏感 URL 參數的簡單查詢</td>
              <td><code>GET</code></td>
              <td>Query string 或無參數；輸入仍須驗證</td>
              <td><a href="https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.1" target="_blank" rel="noopener noreferrer">RFC 9110 §9.2.1</a><br><a href="https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer">OWASP Input Validation</a></td>
            </tr>
            <tr>
              <td>含敏感資料、複合 DTO 或大量條件的查詢</td>
              <td><code>POST</code></td>
              <td>JSON Body + <code>@Valid @RequestBody</code></td>
              <td><a href="https://cwe.mitre.org/data/definitions/598.html" target="_blank" rel="noopener noreferrer">CWE-598</a><br><a href="https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md" target="_blank" rel="noopener noreferrer">ASVS 14.2.1</a></td>
            </tr>
            <tr>
              <td>新增或觸發業務動作</td>
              <td><code>POST</code></td>
              <td>Body；不得使用 GET</td>
              <td><a href="https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.1" target="_blank" rel="noopener noreferrer">RFC 9110 §9.2.1</a><br><a href="https://www.rfc-editor.org/rfc/rfc9110.html#section-9.3.3" target="_blank" rel="noopener noreferrer">RFC 9110 §9.3.3</a></td>
            </tr>
            <tr>
              <td>完整／局部修改</td>
              <td><code>POST</code></td>
              <td>RDSS 新 API 預設使用 action-style POST；既有 PUT／PATCH 契約可維持</td>
              <td><a href="https://www.rfc-editor.org/rfc/rfc9110.html#section-9.3.3" target="_blank" rel="noopener noreferrer">RFC 9110 §9.3.3</a><br><span>POST 為 RDSS 落地決策</span></td>
            </tr>
            <tr>
              <td>刪除</td>
              <td><code>POST</code></td>
              <td>敏感識別資料放 Body，並做物件層級授權；既有 DELETE 契約可維持</td>
              <td><a href="https://www.rfc-editor.org/rfc/rfc9110.html#section-9.3.3" target="_blank" rel="noopener noreferrer">RFC 9110 §9.3.3</a><br><a href="https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/" target="_blank" rel="noopener noreferrer">OWASP API1:2023 BOLA</a></td>
            </tr>
            <tr>
              <td>檔案下載</td>
              <td><code>GET</code> 或 <code>POST</code></td>
              <td>含敏感條件用 POST Body；敏感回應設 <code>no-store</code></td>
              <td><a href="https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md" target="_blank" rel="noopener noreferrer">ASVS 14.2.1／14.3.2</a><br><a href="https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/" target="_blank" rel="noopener noreferrer">OWASP API1:2023 BOLA</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="margin-top: 10px; color: #64748b; font-size: 0.88rem;">表內官方來源說明通用安全控制；新 API 預設採 action-style POST 是 RDSS 依現況制定的落地規則，不代表 RFC 或 OWASP 強制所有異動一律使用 POST。</p>
    </div>

    <div style="margin-bottom: 36px; padding: 20px; background: #fff7ed; border-left: 4px solid #f97316; border-radius: 8px;">
      <h4 style="margin-bottom: 10px; color: #9a3412;">敏感資料不得出現在 URL</h4>
      <p style="color: #9a3412; line-height: 1.8; margin-bottom: 10px;">
        最低範圍包含姓名、身分證號、生日、電話、email、地址、學經歷、薪資、申請／審查資料，以及 password、token、API key、session ID、OTP、驗證碼等憑證。path 與 query string 都受限制。
      </p>
      <pre style="background: #7c2d12; color: #ffedd5; margin-bottom: 0;">// ❌ POST 仍把敏感資料放在 URL
POST /QSP020B01/query?idNo=A123456789

// ✅ 敏感查詢條件放在 Body（以下為示意端點）
POST /QSP020B01/query
{ "idNo": "A123456789", "pageNo": 1, "pageSize": 15 }</pre>
      <p style="margin-top: 10px; margin-bottom: 0; color: #9a3412; font-size: 0.88rem;">
        依據：<a href="https://cwe.mitre.org/data/definitions/598.html" target="_blank" rel="noopener noreferrer">CWE-598</a>、
        <a href="https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md" target="_blank" rel="noopener noreferrer">OWASP ASVS 14.2.1</a>
      </p>
    </div>

    <div class="grid" style="margin-bottom: 36px;">
      <article class="card">
        <h4 style="margin-bottom: 12px; color: #059669;">✓ 非敏感只讀查詢</h4>
        <pre>GET /RDP011A03/parentType</pre>
        <ul>
          <li>不得修改資料、寄信、送審或產生一次性狀態</li>
          <li>可安全 retry／prefetch</li>
          <li>如有參數，使用 Axios <code>params</code> 並做後端驗證</li>
        </ul>
      </article>
      <article class="card">
        <h4 style="margin-bottom: 12px; color: #2563eb;">✓ 含敏感／複合條件查詢</h4>
        <pre># 示意端點，非既有 API 契約
POST /QSP020B01/query

{
  "idNo": "A123456789",
  "pageNo": 1,
  "pageSize": 15
}</pre>
        <ul>
          <li>Body 仍須 Bean Validation</li>
          <li>Service 仍須檢查資料歸屬與功能權限</li>
          <li>不得整包輸出 request／DTO 到 log</li>
        </ul>
      </article>
    </div>

    <div class="callout" style="margin-bottom: 36px;">
      <h4 style="margin-bottom: 10px;">RDSS 生效範圍與過渡原則</h4>
      <ul>
        <li><strong>新增／契約異動：</strong>新增 API，或異動 method、path、request、response 時，完整適用本規範。</li>
        <li><strong>既有 API 契約優先：</strong>未異動的既有 API 不因本規範發布就轉換 method；前端與後端不得單邊修改。</li>
        <li><strong>不齊頭式改寫：</strong>既有 GET／PUT／PATCH／DELETE 不因規範發布就全面改為 POST。</li>
        <li><strong>新 API method：</strong>除非外部介接契約或架構審查明確要求，新 API 不新增 PUT／PATCH／DELETE。</li>
        <li><strong>PR 阻擋：</strong>P0／P1 或實際弱掃 High／Critical 必須處理；P2 能低風險完成就修正，否則建立安全改善事項並註記風險；P3 列技術債。</li>
        <li><strong>TanStack Query 看副作用：</strong>POST 查詢仍可用 <code>useQuery</code>；會異動或寄送的操作使用 <code>useMutation</code>。</li>
      </ul>
      <p style="margin-top: 10px; margin-bottom: 0; font-size: 0.88rem;">
        依據：<a href="https://csrc.nist.gov/projects/ssdf" target="_blank" rel="noopener noreferrer">NIST SSDF risk-based adoption</a>、
        <a href="https://tanstack.com/query/latest/docs/framework/vue/guides/queries" target="_blank" rel="noopener noreferrer">TanStack Queries</a>、
        <a href="https://tanstack.com/query/latest/docs/framework/vue/guides/mutations" target="_blank" rel="noopener noreferrer">Mutations</a>
      </p>
    </div>

    <div style="margin-bottom: 36px; padding: 20px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px;">
      <h4 style="margin-bottom: 10px; color: #334155;">HTTP method 之外仍須遵守的控制</h4>
      <ul style="color: #475569; line-height: 1.8; margin-left: 20px;">
        <li>敏感資料不得寫入 request／DTO／response log。（<a href="https://cwe.mitre.org/data/definitions/532.html" target="_blank" rel="noopener noreferrer">CWE-532</a>、<a href="https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer">OWASP Logging</a>）</li>
        <li>敏感回應與下載須使用 <code>Cache-Control: no-store</code>。（<a href="https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md" target="_blank" rel="noopener noreferrer">OWASP ASVS 14.3.2</a>）</li>
        <li>CSRF 依瀏覽器是否自動附帶認證資訊判斷，不以 POST 作為防護。（<a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer">OWASP CSRF</a>）</li>
        <li>端點須拒絕未允許的 method 並回 405；CORS allowedMethods 不能取代伺服器／閘道控管。（<a href="https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html#restrict-http-methods" target="_blank" rel="noopener noreferrer">OWASP REST Security</a>）</li>
      </ul>
    </div>

    <n-collapse style="margin-top: 48px;">
      <n-collapse-item name="backend-validation">
        <template #header>
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 1.3rem; font-weight: 700; color: #7c3aed;">後端輸入驗證實作</span>
            <span style="font-size: 0.9rem; color: #6b7280; font-weight: normal;">（點擊展開）</span>
          </div>
        </template>
        <BackendValidation />
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<script setup>
import { NCollapse, NCollapseItem } from 'naive-ui'
import BackendValidation from '@/content/BackendValidation.vue'
</script>
