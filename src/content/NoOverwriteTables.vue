<template>
  <div>
    <p class="muted" style="margin-bottom: 24px;">DBA 倒資料（固化）時不會被來源環境覆蓋的 18 張表。改這些表的 SQL，SIT 跑完後板橋 UAT、資服司 UAT 與正式環境都要各自再跑一次。</p>

    <!-- 結論 -->
    <div style="margin-bottom: 32px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--c-text-indigo-600);">結論</h3>
      <article class="card" style="background: var(--c-bg-red-50); border-color: var(--c-border-red-300);">
        <ul style="margin: 0; padding-left: 20px; line-height: 1.9; color: var(--c-text-red-800);">
          <li><strong>DBA 執行 SIT 倒資料、資料匯入或環境資料更新時，下列 18 張表不得由來源環境資料覆蓋</strong>，保留 SIT 既有內容，以專案團隊在 SIT 建立及維護的資料為基準。</li>
          <li>這些表承載系統參數、權限設定、首頁輪播、單位代碼、排程、郵件與檔案管理等基礎設定資料。</li>
          <li>另 11 張 <code>QRTZ_*</code> 表沿用 DBA 既有排除腳本一併排除，但新後端 Quartz 以記憶體 JobStore 執行、不讀不寫這 11 張，不需固化（合計 29 張，與 DBA 排除腳本一致）。</li>
          <li>紀錄日期 2026-09-04；最後更新 2026-11-05（新增戶役政系統資料交換選單複查；2026-10-30 新增受訓前役男 24 角色複查；2026-10-13 QRTZ_* 改列不需固化、補排程開關 SCHEDULE_* 複查）。來源：<code>RDSS_WORK_HELPER/RDSS_Task_Tracker/dba/20261105_SIT資料匯入不覆蓋表清單.md</code>。</li>
        </ul>
      </article>
    </div>

    <!-- 18 張表 -->
    <div style="margin-bottom: 32px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--c-text-indigo-600);">不覆蓋表清單（18 張）</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th style="width: 48px;">#</th>
              <th>表名</th>
              <th>用途</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(t, i) in tables" :key="t.name">
              <td>{{ i + 1 }}</td>
              <td><code>{{ t.name }}</code></td>
              <td>{{ t.purpose }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="muted" style="margin-top: 12px; font-size: 0.9rem;">用途欄是目前的概括認知，尚未逐表完成資料字典或程式相依性盤點。</p>
    </div>

    <!-- PG 怎麼用 -->
    <div style="margin-bottom: 32px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--c-text-indigo-600);">PG 要怎麼用這份清單</h3>
      <p style="margin-bottom: 12px;">DBA 平常用「固化」（把 SIT 資料倒進板橋 UAT／資服司 UAT）更新測試環境。同一支 SQL 在 SIT 跑完後要不要再去其他環境跑，看目標表在不在這 18 張裡：</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th style="width: 200px;">情況</th>
              <th>判斷</th>
              <th>做法</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>A. 固化帶過去</strong></td>
              <td>目標表<strong>不在</strong> 18 張清單</td>
              <td>只在 SIT 執行；交付說明寫「SIT 已改，下次固化會帶到板橋 UAT／資服司 UAT，DBA 不用另外跑」。</td>
            </tr>
            <tr>
              <td><strong>B. 固化不帶，要直接下 SQL</strong></td>
              <td>目標表<strong>在</strong> 18 張清單（MAIL_TEMPLATE、RDSYS_CONFIG、RDSYS_PERMISSION* 都是）</td>
              <td>SIT 跑完後，板橋 UAT、資服司 UAT（rdssuat）要<strong>各自</strong>再執行一次，正式環境上線時也要；DBA 執行單逐環境列狀態欄（已執行／待執行）。</td>
            </tr>
          </tbody>
        </table>
      </div>
      <article class="card" style="background: var(--c-bg-amber-100); border-color: var(--c-border-amber-400); margin-top: 16px;">
        <p style="margin: 0; color: var(--c-text-amber-800);"><strong>📌 常見踩雷：</strong>選單權限（RDSYS_PERMISSION 系列）與郵件範本（MAIL_TEMPLATE）在 SIT 改好就以為各環境都有。它們都在 18 張裡，沒給 DBA 執行單去 UAT 跑，UAT 就會看不到選單或寄舊內容。</p>
      </article>
    </div>

    <!-- RDSYS_CONFIG 重要註記 -->
    <div style="margin-bottom: 32px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--c-text-indigo-600);">RDSYS_CONFIG 重要註記</h3>

      <h4 style="font-size: 1.05rem; margin-bottom: 10px;">1. <code>IS_TESTING</code> 絕對不能改成 N</h4>
      <ul style="margin: 0 0 12px; padding-left: 20px; line-height: 1.8;">
        <li>SIT 現值 <code>IS_TESTING = Y</code>。語意：Y = 測試系統、N = 正式系統。改成 N 等於把 SIT 當正式區跑。</li>
        <li>任何倒資料、還原、手動 UPDATE 之後，第一件事就是確認這個值仍為 Y。</li>
      </ul>
      <div class="table-wrap" style="margin-bottom: 12px;">
        <table>
          <thead>
            <tr>
              <th>受影響功能</th>
              <th>IS_TESTING = Y（現況）</th>
              <th>若被改成 N</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>役男出境核准通報排程（PTM062B02 / AbroadApproveNotifyJob）</td>
              <td>直接回「測試系統暫不執行出境通報」，不打移民署</td>
              <td><strong>會真的呼叫移民署 saveSoldierApprove</strong>，把測試資料通報出去</td>
            </tr>
            <tr>
              <td>憑證登入／簽章驗證（NcaCertToolsService）</td>
              <td>允許 GTESTCA 測試憑證</td>
              <td>測試卡一律被擋「正式系統環境不得使用測試憑證」，<strong>SIT 所有憑證功能全部不會過</strong></td>
            </tr>
            <tr>
              <td>寄信（舊系統 EMailDelegateFactory / HtmlEMail 看此值）</td>
              <td>寄件者改用測試信箱，主旨加「[測試系統]」</td>
              <td>以正式寄件者寄出，<strong>用人單位／役男會收到看起來是正式的信</strong>。新後端寄信走 Microsoft Graph，寄件者看各環境 profile 的 <code>graph.sender-address</code>，不看此值；但收件人仍是業務資料裡的真實信箱，倒資料時不受此欄位保護</td>
            </tr>
            <tr>
              <td>推播（BroadcastService / PushMessageServerAgent）</td>
              <td>主旨、內容前綴「[測試系統訊息]」</td>
              <td>以正式訊息推送</td>
            </tr>
            <tr>
              <td>薪資銀行郵件收檔（RFM020B04）</td>
              <td>dry-run，不真正處理</td>
              <td>真正處理銀行郵件</td>
            </tr>
            <tr>
              <td>帳號申請重複檢核放行（RDP031A01、AccountApproveRepository）</td>
              <td>搭配 <code>TEST_ACCOUNTASK_ALLOW_DUPLICATE</code> 可放行重複申請供測試</td>
              <td>一律依正式規則擋</td>
            </tr>
            <tr>
              <td>研發成果登錄時段（REM040U01）</td>
              <td>非登錄時段仍放行操作</td>
              <td>非登錄時段一律擋</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pre style="margin: 0 0 20px;"><code>SELECT S_CODE, CONTENT FROM dbo.RDSYS_CONFIG WHERE S_CODE = 'IS_TESTING';
-- 預期 CONTENT = 'Y'</code></pre>

      <h4 style="font-size: 1.05rem; margin-bottom: 10px;">2. 表結構與異動原則</h4>
      <ul style="margin: 0 0 12px; padding-left: 20px; line-height: 1.8;">
        <li>欄位：<code>S_CODE</code>（設定代號，固定不能改）／<code>S_NAME</code>（中文說明）／<code>CONTENT</code>（實際值，<strong>只有這欄要異動</strong>）／<code>TAG</code>（分類標籤，供系統參數維護畫面 ADM011B01 分群顯示，不要改）。</li>
        <li>表內含 SMTP 密碼、API KEY、測試信箱密碼等敏感值，<strong>不要把整表內容貼到文件或工單</strong>。</li>
        <li>改值一律用指定 <code>S_CODE</code> 的 UPDATE，不整表覆蓋：</li>
      </ul>
      <pre style="margin: 0 0 20px;"><code>UPDATE dbo.RDSYS_CONFIG
SET CONTENT = N'【新值】'
WHERE S_CODE = '【S_CODE】';</code></pre>

      <h4 style="font-size: 1.05rem; margin-bottom: 10px;">3. 對外通報 API 網址（移民署／內政部）兩筆設定</h4>
      <p style="margin-bottom: 12px;">這兩筆決定系統把役男資料通報到「測試機」還是「正式機」。倒資料時若被正式區資料覆蓋，SIT 就會打到正式機。</p>
      <div class="table-wrap" style="margin-bottom: 12px;">
        <table>
          <thead>
            <tr>
              <th>S_CODE</th>
              <th>S_NAME</th>
              <th>對應功能</th>
              <th>SIT／UAT 應填（測試機）</th>
              <th>正式機（勿填進 SIT）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>PTM_0711_WEB_API_URL</code></td>
              <td>退役證明通報API URL</td>
              <td>PTM070B09 退役證明</td>
              <td><code>https://ncauat.moi.gov.tw/rdssdischarge</code></td>
              <td><code>https://sr.moi.gov.tw/rdssdischarge/</code></td>
            </tr>
            <tr>
              <td><code>PTM_EXPORT_WEB_API_URL</code></td>
              <td>備役列管通報API URL</td>
              <td>PTM070B06 歸鄉報到</td>
              <td><code>https://ncauat.moi.gov.tw/rdss</code></td>
              <td><code>https://sr.moi.gov.tw/rdss/</code></td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
        <li>同組設定：<code>PTM_0711_WEB_API_USED</code>／<code>PTM_EXPORT_WEB_API_USED</code> 是開關（Y 啟用對外呼叫）；<code>PTM_0711_WEB_API_KEY</code>／<code>PTM_EXPORT_WEB_API_KEY</code> 是 Bearer Token，UAT 與正式機共用，不用切換；<code>PTM_ABROAD_NOTIFY_STRAT_DATE</code> 是出境通報起算日（民國年 yyyMMdd）。</li>
        <li>程式讀取位置：Ptm070b09Service（退役證明）、Ptm070b06Service（歸鄉報到）先看 USED 開關，再取 KEY 與 URL 呼叫。</li>
      </ul>
    </div>

    <!-- 2026-10-14 異動 -->
    <div style="margin-bottom: 32px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--c-text-indigo-600);">2026-10-14 異動：11 張 Quartz 表退出不覆蓋範圍</h3>
      <p style="margin-bottom: 12px;">後端確認下列 11 張 Quartz 表不再使用，由原 29 張清單移除；其餘 18 張維持原保留規則。</p>
      <p style="margin-bottom: 12px;"><code>QRTZ_BLOB_TRIGGERS</code>、<code>QRTZ_CALENDARS</code>、<code>QRTZ_CRON_TRIGGERS</code>、<code>QRTZ_FIRED_TRIGGERS</code>、<code>QRTZ_JOB_DETAILS</code>、<code>QRTZ_LOCKS</code>、<code>QRTZ_PAUSED_TRIGGER_GRPS</code>、<code>QRTZ_SCHEDULER_STATE</code>、<code>QRTZ_SIMPLE_TRIGGERS</code>、<code>QRTZ_SIMPROP_TRIGGERS</code>、<code>QRTZ_TRIGGERS</code></p>
      <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
        <li><code>JOB_QUARTZ</code> 不屬於這 11 張，仍列入不覆蓋清單。</li>
        <li>只調整倒資料的排除範圍，不要求刪表或清空現行資料，也不要求匯入來源環境的 Quartz 排程資料。</li>
      </ul>
    </div>

    <!-- 倒資料後要複查的三項新增紀錄 -->
    <div style="margin-bottom: 32px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--c-text-indigo-600);">倒資料後另外要複查的三項（2026-10-13 ～ 2026-11-05 新增）</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th style="width: 220px;">項目</th>
              <th>內容</th>
              <th>倒資料後怎麼查</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>排程開關 <code>SCHEDULE_*</code></strong>（2026-10-13，KAN-901）</td>
              <td>總開關、執行主機、各排程開關存在 RDSYS_CONFIG，由「系統管理 &gt; 網站內容管理 &gt; 排程作業狀態」切換；yml 的 <code>scheduling.*.enabled</code> 已停用。觸發前依序檢查總開關 ON → 本機 hostname 等於 <code>SCHEDULE_RUN_HOST</code> → 該排程開關 ON，缺列視為 OFF。</td>
              <td><code>SCHEDULE_RUN_HOST</code> 必須是該環境主機自己的 hostname；被倒成別台會讓所有排程靜悄悄停掉。</td>
            </tr>
            <tr>
              <td><strong>受訓前役男(24) 角色與六項選單</strong>（2026-10-30，KAN-2054）</td>
              <td>轉入資料漏了角色 24：六項選單（甄選作業、錄取通知書列印、役男自願放棄錄取申請、役男入營梯次選填登記、釋出作業、轉調役男協調進用）在 RDSYS_PERMISSION_USER 被掛成 19，入營排程只處理有 24 的帳號。SIT 已修：RDSYS_USER_TO_RXLE 補 24、ACCOUNT 入營者 19→18、六筆權限 19→24，順序固定。</td>
              <td>RDSYS_USER_TO_RXLE 與 RDSYS_PERMISSION_USER 受保護，用清單第 6 點 SQL 複查；<strong>ACCOUNT 不受保護</strong>，倒完要重跑 19→18 與補 24。正式轉檔腳本要補帶舊系統 24 角色。</td>
            </tr>
            <tr>
              <td><strong>戶役政系統資料交換選單 <code>PTM_0906</code></strong>（2026-11-05，合約 C277）</td>
              <td>新畫面 PTM092B03 的選單與角色 2 授權為 SIT 手動建立；舊系統 NCA_PERMISSION 無此筆（當年 insertPermission 已註解），轉檔不會帶入。UAT／正式用上線 SQL 補建：SN 取 MAX+1、父節點以 FUNC_CODE <code>PTM_09</code> 查，不可寫死。</td>
              <td>RDSYS_PERMISSION 應有一筆 FUNC_CODE PTM_0906、父節點 PTM_09，RDSYS_PERMISSION_USER 掛 USER_TYPE 2；客戶端角色待 PM 指定後再補。</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 執行原則 -->
    <div style="margin-bottom: 32px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--c-text-indigo-600);">執行原則</h3>
      <article class="card" style="background: var(--c-bg-green-50); border-color: var(--c-border-green-300);">
        <ol style="margin: 0; padding-left: 20px; line-height: 1.9;">
          <li>DBA 製作或執行 SIT 資料匯入腳本時，將 18 張表排除在覆蓋範圍之外。</li>
          <li>「不覆蓋」是指不可因一般倒資料而以其他環境內容取代 SIT 既有資料；經核准的功能異動或專案資料調整不在此限。</li>
          <li>若作業方式無法直接排除，先備份 SIT 既有內容，作業後完整還原並驗證，不可直接沿用來源環境資料。</li>
          <li>作業完成後至少複查五件事：<code>IS_TESTING</code> 仍為 Y、兩筆 <code>PTM_*_WEB_API_URL</code> 仍為 ncauat 測試機網址、<code>SCHEDULE_RUN_HOST</code> 仍為該環境主機 hostname、六項選單權限仍掛 24 且受訓役男帳號皆有 24 角色、戶役政系統資料交換選單（<code>PTM_0906</code>）仍存在且掛角色 2。</li>
          <li><code>ACCOUNT</code> 不在不覆蓋清單，倒資料後要重跑一次「入營日已過的受訓役男 19→18」修正並對新進來的未入營 19 帳號補 24，否則 KAN-2054 現象會回來。</li>
          <li>清單有增減時，同步更新來源 md 與本頁並註記異動日期。</li>
        </ol>
      </article>
    </div>
  </div>
</template>

<script setup>
const tables = [
  { name: 'RDSYS_CONFIG', purpose: '系統參數，含 IS_TESTING 與對外 API 網址' },
  { name: 'RDSYS_PERMISSION', purpose: '權限定義（選單節點）' },
  { name: 'RDSYS_PERMISSION_USER', purpose: '使用者權限（角色預設與個人授權）' },
  { name: 'RDSYS_PERMISSION_SETUP', purpose: '權限設定' },
  { name: 'RDSYS_USER_TO_RXLE', purpose: '使用者角色對應' },
  { name: 'RDSYS_CAROUSEL', purpose: '首頁輪播' },
  { name: 'RDSYS_CAROUSEL_TEXT', purpose: '首頁輪播文字' },
  { name: 'CODE_UNIT_PROD', purpose: '單位代碼（產業別）' },
  { name: 'CODE_UNIT_RANGE1', purpose: '單位代碼' },
  { name: 'CODE_UNIT_RANGE2', purpose: '單位代碼' },
  { name: 'CODE_UNIT_COM', purpose: '單位代碼（單位別）' },
  { name: 'JOB_QUARTZ', purpose: '舊格式 Quartz 排程定義；程式未使用，8 筆 STATUS 全 N，有資料、保留無害，沿用保護。實際排程走 Spring @Scheduled，開關在 RDSYS_CONFIG 的 SCHEDULE_*' },
  { name: 'MAIL_ATTACHMENTLIST', purpose: '郵件附件' },
  { name: 'MAIL_INFO', purpose: '郵件記錄，量大，覆蓋會混入來源環境的寄信紀錄' },
  { name: 'MAIL_TEMPLATE', purpose: '郵件範本' },
  { name: 'TODO_LIST', purpose: '待辦' },
  { name: 'RDSYS_CODE', purpose: '系統代碼' },
  { name: 'RDSYS_FILE_MANAGEMENT', purpose: '檔案管理' }
]
</script>
