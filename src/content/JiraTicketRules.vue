<template>
  <div>
    <p class="muted" style="margin-bottom: 24px;">
      驗測期間（PMO 驗測、資服司驗測、內部自測）發現的問題，一律在 Jira KAN 專案開「子任務」。這一章規定單子怎麼建、狀態怎麼押、每個人身上只會有哪些狀態。每日修復進度統計與「疑似漏押」清單都照這份規則跑，押錯的單會被列出來。2026-11-09 定版。
    </p>

    <!-- 兩種來源 -->
    <div style="margin-bottom: 40px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--c-text-indigo-600);">📌 兩種來源，用標籤分</h3>
      <div class="table-wrap" style="margin-bottom: 12px;">
        <table>
          <thead>
            <tr><th style="width: 120px;">標籤</th><th>誰提的</th><th>修完誰複測</th></tr>
          </thead>
          <tbody>
            <tr><td><code>PMO驗測</code></td><td>PMO 提出的</td><td>交回 PM（Feeble Liu），PM 丟回 PMO 自己測</td></tr>
            <tr><td><code>自行驗測</code></td><td>不是 PMO 提的，我們自己發現的（資服司驗測現場、內部自測、開發時發現）</td><td>該模組測試負責人複測</td></tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li>建單時一定選一個，沒選就看不出修完該轉給誰。</li>
        <li><strong>種類只看標籤，不看建立人</strong>：PMO 的單是小助理用 Feeble Liu 帳號建的，但 PM 偶爾也會自己建資服司的單。</li>
      </ul>
    </div>

    <!-- 狀態流程 -->
    <div style="margin-bottom: 40px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--c-text-indigo-600);">🔁 狀態流程</h3>
      <div class="table-wrap" style="margin-bottom: 12px;">
        <table>
          <thead>
            <tr><th style="width: 70px;">步驟</th><th style="width: 120px;">誰</th><th>情況</th><th style="width: 110px;">押狀態</th><th>受託人轉給</th></tr>
          </thead>
          <tbody>
            <tr><td>建單</td><td>建單人</td><td>確認是問題</td><td>待處理</td><td>該模組 PG</td></tr>
            <tr><td>建單</td><td>建單人</td><td>一看就是新需求或暫時不修</td><td>待確認</td><td>Feeble Liu</td></tr>
            <tr><td>處理</td><td>PG</td><td>修完，<code>自行驗測</code> 的單</td><td>已修正</td><td>該模組測試負責人</td></tr>
            <tr><td>處理</td><td>PG</td><td>修完，<code>PMO驗測</code> 的單</td><td>已修正</td><td>Feeble Liu</td></tr>
            <tr><td>處理</td><td>PG</td><td>修不了或判定是新需求</td><td>待確認</td><td>Feeble Liu</td></tr>
            <tr><td>複測</td><td>測試負責人</td><td>複測通過</td><td>完成</td><td>Feeble Liu</td></tr>
            <tr><td>複測</td><td>測試負責人</td><td>複測沒過</td><td>退回修改</td><td>該模組 PG，留言寫哪裡沒過</td></tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li>「處理中」在統計上 = Jira 的 進行中 ＋ 退回修改。</li>
        <li>不會有「PG 修完丟給測試人員、測試人員再押待確認」：新需求／修不了在 PG 那一步就押待確認轉 Feeble。</li>
        <li>複測結果寫留言，不要改描述。</li>
      </ul>
    </div>

    <!-- 角色狀態 -->
    <div style="margin-bottom: 40px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--c-text-indigo-600);">👤 每個角色身上只會有這些狀態</h3>
      <div class="table-wrap" style="margin-bottom: 12px;">
        <table>
          <thead>
            <tr><th style="width: 200px;">角色</th><th>身上該有的狀態</th><th>出現就是漏押／漏轉</th></tr>
          </thead>
          <tbody>
            <tr><td>PG（模組開發負責人）</td><td>待處理、處理中（進行中／退回修改）</td><td style="color: var(--c-text-red-600);">已修正（修完沒轉人）、待確認、完成</td></tr>
            <tr><td>測試負責人</td><td>已修正（限 <code>自行驗測</code>，等複測）</td><td style="color: var(--c-text-red-600);">待處理（PG 修完沒押已修正）、待確認、完成（複測完沒轉回 Feeble）</td></tr>
            <tr><td>Feeble Liu（PM）</td><td>待確認、完成、已修正（限 <code>PMO驗測</code>）</td><td style="color: var(--c-text-red-600);">待處理、處理中（該押待確認沒押）</td></tr>
            <tr><td>未指派</td><td>無</td><td style="color: var(--c-text-red-600);">全部（建單沒押受託人就是漏押）</td></tr>
          </tbody>
        </table>
      </div>
      <p class="muted" style="font-size: 0.95rem;">員額申請（alvis.wu）、甄選作業（Owen Su）的 PG 與測試負責人是同一人，已修正掛自己是正常的。</p>
    </div>

    <!-- 模組窗口 -->
    <div style="margin-bottom: 40px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--c-text-indigo-600);">🧭 模組窗口（2026-11-09 版）</h3>
      <div class="table-wrap" style="margin-bottom: 12px;">
        <table>
          <thead>
            <tr><th style="width: 140px;">模組</th><th>開發負責人（PG，建單時的受託人）</th><th>測試負責人（修完轉回給）</th></tr>
          </thead>
          <tbody>
            <tr v-for="m in owners" :key="m.name"><td>{{ m.name }}</td><td>{{ m.pg }}</td><td>{{ m.tester }}</td></tr>
          </tbody>
        </table>
      </div>
      <p style="line-height: 1.8;">模組名只用這九個。單子屬於哪個模組，看它掛的「功能」父議題再往上一層的大型工作，所以<strong>父系掛錯模組就統計錯、派錯人</strong>。窗口異動以最新公告為準。</p>
    </div>

    <!-- 建單必填 -->
    <div style="margin-bottom: 40px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--c-text-indigo-600);">📝 建單必填</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th style="width: 120px;">欄位</th><th style="width: 70px;">必填</th><th>規定</th></tr>
          </thead>
          <tbody>
            <tr><td>議題類型</td><td>必填</td><td>子任務</td></tr>
            <tr><td>父系</td><td>必填</td><td>掛到該功能的「功能」議題；找不到問該模組 PG，不要隨便掛</td></tr>
            <tr><td>摘要</td><td>必填</td><td>照下方標題格式</td></tr>
            <tr><td>描述</td><td>必填</td><td>照下方描述模板</td></tr>
            <tr><td>標籤</td><td>必填</td><td><code>PMO驗測</code> 或 <code>自行驗測</code> 擇一</td></tr>
            <tr><td>優先順序</td><td>必填</td><td>建單人自判：Highest 立刻修、已影響測試或功能運作；High 影響主流程；Medium 一般；Low 不影響主流程的邊角</td></tr>
            <tr><td>受託人</td><td>必填</td><td>待處理 → 該模組 PG；待確認 → Feeble Liu。不可空白</td></tr>
            <tr><td>狀態</td><td>必填</td><td>確認是問題 → 待處理；新需求或暫不修 → 待確認</td></tr>
            <tr><td>截圖／檔案（雲端連結）</td><td>選填</td><td><strong>資安規定：Jira 不放附件</strong>，不用 Jira 的附件功能、不直接附檔。截圖與測試用的檔案一律上傳雲端（SharePoint），連結貼在描述的「截圖」行。<strong>雲端圖片檔名一律改成單號</strong>，如 <code>KAN-1849.png</code>；同一張單多張圖不用自己編號，讓系統取成 <code>KAN-1849 (1)</code>、<code>KAN-1849 (2)</code>。單號建單後才有，所以先建單、再上傳改名、再把連結貼回描述</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 標題格式 -->
    <div style="margin-bottom: 40px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--c-text-indigo-600);">🏷️ 標題格式</h3>
      <pre style="margin: 0 0 16px 0;">(新需求)[來源YYYYMMDD][模組] 頁面或功能 &gt; 問題一句話</pre>
      <div class="table-wrap" style="margin-bottom: 16px;">
        <table>
          <thead>
            <tr><th style="width: 160px;">段</th><th>規定</th></tr>
          </thead>
          <tbody>
            <tr><td>(新需求)</td><td>不管是測試人員還是 PG 發現的，只要判定是新需求，最前面一定加「(新需求)」四個字（半形括號）。同時狀態押待確認、受託人 Feeble Liu。不是新需求就沒有這段</td></tr>
            <tr><td>[來源YYYYMMDD]</td><td>PMO 的單寫 <code>[PMO驗測20261106/渝傑]</code>，斜線後是 PMO 測試人員姓名；資服司驗測現場測出來的寫 <code>[資服司驗測20261106]</code>；不是在資服司驗測場合發現的（內部自測、開發時發現）寫 <code>[自行驗測20261106]</code>。日期是發現當天</td></tr>
            <tr><td>[模組]</td><td>九個模組名之一</td></tr>
            <tr><td>頁面或功能</td><td>選單路徑最後一層或畫面名，有頁面代號（如 PNR023b01）可放這裡</td></tr>
            <tr><td>問題一句話</td><td>60 字內講完「哪裡怎麼了」。帳號、測資、步驟、截圖都寫到描述，不塞標題</td></tr>
          </tbody>
        </table>
      </div>
      <pre style="margin: 0 0 12px 0;">[資服司驗測20261106][役男管理] 出境狀態查詢 &gt; 已核准役男未顯示三顆函文按鈕
(新需求)[資服司驗測20261029][役男管理] 健保申報匯出 &gt; 退保月份要預設系統年月
[PMO驗測20260910/渝傑][甄選作業] 錄用名冊核定查詢 &gt; 選次別查詢後下方按鍵未依舊系統顯示</pre>
      <p class="muted" style="font-size: 0.95rem;">舊的「【PMO/姓名】」「(待確認)」「(re-test)」前綴不再用；已建的單不用回頭改。待確認看狀態、複測看留言。</p>
    </div>

    <!-- 描述模板 -->
    <div style="margin-bottom: 40px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--c-text-indigo-600);">🧾 描述模板</h3>
      <p style="margin-bottom: 12px; line-height: 1.8;">測試人員在驗測現場能記下四件事就夠了。不寫環境（修復與驗證都在板橋 SIT 再包版，環境沒有資訊量），不要求逐步操作步驟（麵包屑加測試資料就能重現）。</p>
      <div style="padding: 16px 20px; background: var(--c-bg-amber-50); border: 2px solid var(--c-border-amber-500); border-radius: 8px; margin-bottom: 16px;">
        <p style="margin: 0 0 8px 0; font-weight: 600; color: var(--c-text-amber-800);">複製這五行，在冒號後面填字</p>
        <pre style="margin: 0;">麵包屑:
測試資料:
現有問題:
預期結果:
截圖:</pre>
      </div>
      <div class="table-wrap" style="margin-bottom: 12px;">
        <table>
          <thead>
            <tr><th style="width: 120px;">行</th><th>寫什麼</th></tr>
          </thead>
          <tbody>
            <tr><td>麵包屑</td><td>問題發生的地方，選單 &gt; 頁面 &gt; 按鈕</td></tr>
            <tr><td>測試資料</td><td>登入帳號、用的檔案（放雲端，連結寫在截圖行）、身分證字號、年度、案號等，PG 要能照著重現</td></tr>
            <tr><td>現有問題</td><td>問題是什麼、畫面怎麼呈現，錯誤訊息原文照貼</td></tr>
            <tr><td>預期結果</td><td>要解決什麼、解決後正確呈現為何；舊系統怎麼做就寫「比照舊系統：…」</td></tr>
            <tr><td>截圖</td><td>選填，沒有寫「無」；貼雲端連結，不掛 Jira 附件；檔名規則見建單必填表</td></tr>
          </tbody>
        </table>
      </div>
      <ul style="margin-bottom: 16px;">
        <li>前四行都要有字，沒有就寫「無」，不能只貼一個截圖連結或一張 PMO 表格就送出。</li>
        <li>PMO 的單可以把 PMO 原始測試紀錄表格貼在模板下面，但前四行還是要填。</li>
      </ul>
      <p style="margin-bottom: 8px;">新需求的單把「現有問題／預期結果」換成：</p>
      <pre style="margin: 0 0 20px 0;">需求內容:要加什麼、改什麼
提出來源:誰提的（資服司承辦／PMO／內部），哪次會議或哪封信</pre>

      <n-collapse default-expanded-names="example">
        <n-collapse-item name="example">
          <template #header>
            <span style="font-size: 1.1rem; font-weight: 600;">💡 範例（原單 KAN-2096 照規則重寫）</span>
          </template>
          <pre style="margin: 0;">摘要:[資服司驗測20261030][員額申請] 審查作業指引 &gt; 查驗C 審查結果確認 &gt; 點「下載審查總分」出現異常訊息
標籤:自行驗測   優先順序:High   受託人:alvis.wu   狀態:待處理

麵包屑:員額作業 &gt; 員額審查作業 &gt; 審查作業指引 &gt; 查驗C 營運計畫審查 &gt; 審查結果確認
測試資料:管理員帳號 TCA0001
現有問題:點「下載審查總分」按鈕，畫面跳出異常訊息，沒有下載任何檔案（訊息原文:操作失敗，請確認資料後重試）
預期結果:下載審查總分 Excel
截圖:https://…/KAN-2096.jpg</pre>
        </n-collapse-item>
      </n-collapse>
    </div>

    <!-- 漏押 -->
    <div style="margin-bottom: 40px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--c-text-indigo-600);">🔍 會被列進「疑似漏押」的情況</h3>
      <p style="margin-bottom: 12px; line-height: 1.8;">每日統計會附第二張表，逐條套下面規則；該補的人用 Jira 變更紀錄往前推到「最後一個動狀態或受託人卻沒走完流程的人」，PM 只是最後接收方不算，沒人動過就是建單人。<strong>沒選標籤一律算建單人</strong>。</p>
      <div class="table-wrap" style="margin-bottom: 12px;">
        <table>
          <thead>
            <tr><th style="width: 140px;">目前狀態</th><th>受託人／標籤</th><th>疑似問題</th></tr>
          </thead>
          <tbody>
            <tr><td>任何</td><td>未指派</td><td>建單沒押受託人</td></tr>
            <tr><td>待處理／處理中</td><td>Feeble Liu</td><td>新需求／暫不修該押待確認沒押</td></tr>
            <tr><td>待處理／處理中</td><td>本模組測試負責人</td><td>PG 修完沒押已修正</td></tr>
            <tr><td>待處理／處理中</td><td>不是本模組 PG</td><td>受託人派錯人</td></tr>
            <tr><td>待處理／處理中</td><td>本模組 PG 但沒標籤</td><td>沒選標籤</td></tr>
            <tr><td>已修正</td><td>沒標籤</td><td>看不出該轉測試負責人還是 Feeble</td></tr>
            <tr><td>已修正</td><td><code>PMO驗測</code> 但不是 Feeble</td><td>PMO 單已修正該轉回 Feeble</td></tr>
            <tr><td>已修正</td><td><code>自行驗測</code> 但不是本模組測試負責人</td><td>修完忘了轉測試負責人</td></tr>
            <tr><td>待確認</td><td>不是 Feeble</td><td>待確認該掛 Feeble</td></tr>
            <tr><td>完成</td><td>不是 Feeble</td><td>複測完沒轉回 Feeble</td></tr>
            <tr><td>任何</td><td>標題有「(新需求)」但狀態不是待確認</td><td>新需求沒押待確認</td></tr>
          </tbody>
        </table>
      </div>
      <p class="muted" style="font-size: 0.95rem;">統計數字照 Jira 現況，不替人改；押錯回 Jira 改，下次跑自然對。</p>
    </div>

    <!-- 檢查清單 -->
    <div style="margin-bottom: 40px; padding: 20px; background: var(--c-bg-emerald-50); border-left: 4px solid var(--c-border-emerald-600); border-radius: 8px;">
      <h4 style="margin-bottom: 12px; color: var(--c-text-emerald-800); font-size: 1.1rem;">✅ 建完自我檢查</h4>
      <ol style="color: var(--c-text-emerald-800); padding-left: 22px; line-height: 1.9; margin: 0;">
        <li>標籤有押而且押對：PMO 提的押 <code>PMO驗測</code>，其他一律 <code>自行驗測</code>，只能選一個。</li>
        <li>狀態押對：一般問題「待處理」；新需求或暫不修「待確認」，而且標題最前面有「(新需求)」。</li>
        <li>受託人跟狀態對得上：待處理 → 該模組 PG；待確認 → Feeble Liu。不能空白。</li>
        <li>描述的麵包屑、測試資料、現有問題、預期結果四行，每一行冒號後面都有字，沒有的寫「無」。</li>
        <li>截圖和檔案都是雲端連結貼在描述，Jira 本身沒有掛附件；雲端檔名是這張單的單號（如 KAN-1849、KAN-1849 (1)），不是手機或 PMO 給的原始檔名。</li>
      </ol>
    </div>

    <!-- 相關檔案 -->
    <div style="padding: 16px; background: var(--c-bg-gray-100); border-radius: 8px;">
      <h4 style="margin-bottom: 8px; font-size: 1rem;">📎 相關檔案（RDSS_WORK_HELPER）</h4>
      <ul style="margin: 0;">
        <li><code>docs\20261109_Jira問題單狀態流程與漏押檢核規則.md</code>：規則全文與修訂歷史</li>
        <li><code>docs\Jira建單模板_PMO驗測_V{{ version }}.docx</code>：發給建 PMO 單的人的 Word 單頁模板（含範例）；檔名 V 號跟著下方修訂紀錄走</li>
        <li><code>docs\Jira建單模板_自行驗測_V{{ version }}.docx</code>：發給測試人員的 Word 單頁模板（含範例）</li>
        <li><code>RDSS_Task_Tracker\tools\jira_round_progress.py</code>：每日修復進度統計與疑似漏押表的產生腳本</li>
      </ul>
    </div>

    <!-- 修訂紀錄 -->
    <div style="margin-top: 40px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--c-text-indigo-600);">🕘 修訂紀錄</h3>
      <p class="muted" style="margin-bottom: 12px; font-size: 0.95rem;">版本號就是兩份建單模板的檔名 V 號；每改一次規範，這裡加一列、模板升一版重發。</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th style="width: 80px;">版本</th><th style="width: 130px;">日期</th><th>異動</th></tr>
          </thead>
          <tbody>
            <tr v-for="h in history" :key="h.version"><td>{{ h.version }}</td><td>{{ h.date }}</td><td>{{ h.change }}</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NCollapse, NCollapseItem } from 'naive-ui'

// 改規範:history 加一列,version 跟著最後一列;模板檔名的 V 號同步
const history = [
  { version: 'V1', date: '2026-11-09', change: '初版：建單必填欄位、標題格式、描述模板（五行）、截圖雲端檔名改單號、模組窗口 2026-11-09 版' },
  { version: 'V2', date: '2026-11-10', change: '資安規定 Jira 不放附件，截圖與檔案一律上雲端、連結貼描述「截圖」行；規則寫進本站第 18 章；模板檔名改 V 版號、加修訂紀錄表' }
]
const version = history[history.length - 1].version.replace('V', '')

const owners = [
  { name: '入口網站', pg: '葛俊佑', tester: 'yihsin.lai' },
  { name: '系統管理', pg: '葛俊佑', tester: 'yihsin.lai' },
  { name: '專案辦公室', pg: '葛俊佑', tester: 'yihsin.lai' },
  { name: '員額申請', pg: 'alvis.wu', tester: 'alvis.wu' },
  { name: '甄選作業', pg: 'Owen Su', tester: 'Owen Su' },
  { name: '役男管理', pg: 'Logan.chang', tester: 'erica.yang' },
  { name: '成效管理', pg: 'chengyu.cheng', tester: 'christy Kuo' },
  { name: '管考獎懲', pg: 'chengyu.cheng', tester: 'christy Kuo' },
  { name: '基金管理', pg: 'chengyu.cheng', tester: 'jill.chan' }
]
</script>
