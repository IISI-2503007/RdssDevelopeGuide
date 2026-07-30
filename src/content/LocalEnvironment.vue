<template>
  <div>
    <p class="muted" style="margin-bottom: 16px;">
      地端啟動後端 API 時，使用 Spring Profile 選擇 SIT 或 UAT 資料庫；切換環境不應修改 datasource 本身。
    </p>

    <div class="callout" style="margin-bottom: 24px; background: #eff6ff; border-color: #93c5fd;">
      <p style="color: #1e40af; margin: 0;">
        <strong>快速結論：</strong>地端測 SIT 資料使用 <code>local</code>；地端測 UAT 資料使用
        <code>localuat</code>。兩者都以 <code>--server.port=8081</code> 啟動，前端
        <code>.env.dev</code> 指向 <code>http://localhost:8081/</code>。
      </p>
    </div>

    <div style="margin-bottom: 32px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: #4f46e5;">Profile 與資料庫對照</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>用途</th><th>Profile</th><th>DB</th><th>地端 Port</th></tr>
          </thead>
          <tbody>
            <tr><td>SIT 測試資料</td><td><code>local</code></td><td><code>rdss</code></td><td><code>8081</code></td></tr>
            <tr><td>UAT 測試資料</td><td><code>localuat</code></td><td><code>rdss_n</code></td><td><code>8081</code></td></tr>
            <tr><td>正式／內網環境</td><td><code>prod</code>／<code>rdssuat</code></td><td>內網 DB</td><td>⛔ 地端禁用</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div style="margin-bottom: 32px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: #4f46e5;">VS Code 啟動方式</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>入口</th><th>使用設定</th><th>適合情境</th></tr></thead>
          <tbody>
            <tr>
              <td>Spring Boot Dashboard 播放鍵</td>
              <td>符合專案的第一組 <code>launch.json</code> configuration</td>
              <td>長時間固定測同一環境</td>
            </tr>
            <tr>
              <td>Run and Debug／F5</td>
              <td>下拉選擇的 configuration</td>
              <td>臨時切換 SIT／UAT</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pre style="background: #1e293b; color: #f1f5f9; border-radius: 8px; padding: 14px; overflow-x: auto; font-size: 0.82rem; line-height: 1.7; margin-top: 14px;">SIT：--spring.profiles.active=local --server.port=8081
UAT：--spring.profiles.active=localuat --server.port=8081</pre>
    </div>

    <div style="margin-bottom: 32px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: #4f46e5;">前端地端啟動</h3>
      <ul style="line-height: 1.9; padding-left: 1.25rem;">
        <li><code>.env.dev</code> 的 <code>VITE_API_BASE_URL_V2</code> 指向 <code>http://localhost:8081/</code>。</li>
        <li>若 5173 被其他工具占用，可用 <code>npx vite --mode dev --port 5180</code>。</li>
        <li><code>.env.dev</code> 是 Git 追蹤檔；地端暫時修改不可跟著推版。</li>
      </ul>
    </div>

    <div class="callout" style="background: #fef2f2; border-color: #f87171;">
      <p style="color: #991b1b; margin: 0 0 8px 0;"><strong>禁止事項</strong></p>
      <ul style="color: #991b1b; margin: 0; padding-left: 20px; line-height: 1.8;">
        <li>地端禁止使用 <code>prod</code>／<code>rdssuat</code>。</li>
        <li>不要為切換環境修改 <code>application-{profile}.yml</code> datasource。</li>
        <li>Dashboard 不支援用 <code>${input:...}</code> 彈出 profile 選單。</li>
      </ul>
    </div>
  </div>
</template>
