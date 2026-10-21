<template>
  <div>
    <p class="muted" style="margin-bottom: 24px;">
      程式沒預期到的錯誤（DB 連不上、欄位截斷、NullPointer…）發生時，使用者只看到一句固定的話加一組錯誤代碼；例外原文與堆疊只進後端 log。維運拿代碼去 log 搜，就找到那一筆。
    </p>

    <!-- 適用範圍 -->
    <div style="margin-bottom: 48px;">
      <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">📋 適用範圍</h3>
      <div class="grid">
        <article class="card">
          <h4 style="margin-bottom: 12px; font-size: 1rem; color: #059669;">業務驗證失敗：照原本做法</h4>
          <ul>
            <li>必填、超長、狀態不符、找不到資料</li>
            <li>直接回明確原因，例如「主要營業項目不可超過200字」</li>
            <li><strong>不給錯誤代碼</strong></li>
          </ul>
        </article>
        <article class="card">
          <h4 style="margin-bottom: 12px; font-size: 1rem; color: #dc2626;">程式沒預期的例外：走錯誤代碼</h4>
          <ul>
            <li><code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">catch (Exception e)</code> 抓到的東西</li>
            <li>使用者看到「系統處理失敗，請稍後再試（錯誤代碼 261021-K7M2QX）」</li>
            <li>原因只進 log</li>
          </ul>
        </article>
      </div>
      <p style="margin-top: 16px; color: var(--text); line-height: 1.8;">
        判斷標準：<strong>使用者改資料就能避開的，是業務驗證；使用者怎麼改都避不開的，是例外。</strong>
      </p>
    </div>

    <!-- 代碼格式 -->
    <div style="margin-bottom: 48px;">
      <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">🔢 代碼格式</h3>
      <pre style="margin: 0 0 16px 0;">yyMMdd-XXXXXX
261021-K7M2QX</pre>
      <ul>
        <li>前 6 碼是西元日期，維運直接知道要開哪一天的 log 檔</li>
        <li>後 6 碼隨機大寫英數，字元集去掉 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">0 O 1 I</code>，避免口述或抄寫混淆</li>
        <li>代碼由後端 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">ErrorRef</code> 產生，前端不產生、不解析</li>
      </ul>
    </div>

    <!-- 使用者看到的訊息 -->
    <div style="margin-bottom: 48px;">
      <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">💬 使用者看到的訊息</h3>
      <p style="margin-bottom: 12px; color: var(--text);">固定句型，只有代碼會變：</p>
      <pre style="margin: 0 0 20px 0;">系統處理失敗，請稍後再試（錯誤代碼 261021-K7M2QX）</pre>
      <p style="margin-bottom: 12px; color: var(--text);">模組化儲存（營運計畫書各章節這種一次存多個模組的 API）的回應長這樣，前端全站處理器會逐行顯示：</p>
      <pre style="margin: 0 0 20px 0;">{
  "success": false,
  "message": "1. 公司簡介：系統處理失敗，請稍後再試（錯誤代碼 261021-K7M2QX）",
  "details": [
    { "moduleName": "單位規模", "success": true,  "message": "更新成功" },
    { "moduleName": "公司簡介", "success": false, "message": "系統處理失敗，請稍後再試（錯誤代碼 261021-K7M2QX）" }
  ]
}</pre>
      <p style="margin-bottom: 12px; color: var(--text);">全站最後防線（<code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">RestApiExceptionHandler</code>）也附代碼：</p>
      <pre style="margin: 0 0 20px 0;">操作失敗，請確認資料後重試（錯誤代碼 261021-K7M2QX）
系統發生錯誤，請稍後再試（錯誤代碼 261021-K7M2QX）</pre>

      <div style="padding: 20px; background: #fee2e2; border-left: 4px solid #dc2626; border-radius: 8px;">
        <h4 style="margin-bottom: 12px; color: #991b1b; font-size: 1.1rem;">❌ 禁止出現在回應裡的東西</h4>
        <ul style="color: #991b1b;">
          <li><code style="background: #fecaca; padding: 2px 6px; border-radius: 4px;">e.getMessage()</code>、SQL 錯誤原文、例外類別名稱、堆疊</li>
          <li>資料表或欄位名稱</li>
          <li>「成功 N 個、失敗 M 個」這種統計句（使用者要的是哪裡錯，不是幾個錯）</li>
        </ul>
        <p style="color: #991b1b; margin-top: 8px;">這也是 Fortify「資訊外洩」類的掃描項目，見第 12 章。</p>
      </div>
    </div>

    <!-- log 格式 -->
    <div style="margin-bottom: 48px;">
      <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">📝 log 格式</h3>
      <p style="margin-bottom: 12px; color: var(--text);">每個代碼對應<strong>一行</strong> ERROR log，後面接完整堆疊：</p>
      <pre style="margin: 0 0 20px 0;">[ERR 261021-K7M2QX] 更新公司簡介失敗 | user=116T3539 uri=/PNR012U11/operationPlan/1A/save | DataIntegrityViolationException: could not execute statement...
    at ...</pre>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <thead>
          <tr style="background: #f3f4f6;">
            <th style="text-align: left; padding: 8px; border: 1px solid #e5e7eb;">欄位</th>
            <th style="text-align: left; padding: 8px; border: 1px solid #e5e7eb;">內容</th>
            <th style="text-align: left; padding: 8px; border: 1px solid #e5e7eb;">來源</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><code>[ERR 代碼]</code></td><td style="padding: 8px; border: 1px solid #e5e7eb;">固定前綴，搜 log 用</td><td style="padding: 8px; border: 1px solid #e5e7eb;">ErrorRef 自動加</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #e5e7eb;">第二段</td><td style="padding: 8px; border: 1px solid #e5e7eb;">哪個功能、哪個模組（程式自己寫，用中文）</td><td style="padding: 8px; border: 1px solid #e5e7eb;">呼叫端傳入</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><code>user=</code></td><td style="padding: 8px; border: 1px solid #e5e7eb;">登入帳號</td><td style="padding: 8px; border: 1px solid #e5e7eb;">ErrorRef 從 Spring Security 取</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><code>uri=</code></td><td style="padding: 8px; border: 1px solid #e5e7eb;">當次請求路徑</td><td style="padding: 8px; border: 1px solid #e5e7eb;">ErrorRef 從 request 取</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #e5e7eb;">第三段</td><td style="padding: 8px; border: 1px solid #e5e7eb;">例外類別與原文</td><td style="padding: 8px; border: 1px solid #e5e7eb;">ErrorRef 自動加</td></tr>
        </tbody>
      </table>
      <div style="padding: 16px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 8px; margin-bottom: 20px;">
        <p style="color: #92400e; line-height: 1.8;">同一個例外<strong>只記一次</strong>：catch 裡呼叫 ErrorRef 之後，不要再另外 <code style="background: #fde68a; padding: 2px 6px; border-radius: 4px;">log.error(..., e)</code>，否則堆疊會出現兩遍。</p>
      </div>

      <h4 style="margin-bottom: 12px; font-size: 1rem; color: var(--text);">各環境 log 位置</h4>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
        <thead>
          <tr style="background: #f3f4f6;">
            <th style="text-align: left; padding: 8px; border: 1px solid #e5e7eb;">環境</th>
            <th style="text-align: left; padding: 8px; border: 1px solid #e5e7eb;">位置</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 8px; border: 1px solid #e5e7eb;">本機</td><td style="padding: 8px; border: 1px solid #e5e7eb;">後端 console；若有設 <code>logging.file.name</code> 則看該檔</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #e5e7eb;">SIT</td><td style="padding: 8px; border: 1px solid #e5e7eb;"><code>/home/rdss/api/logs/rdss-api.log</code></td></tr>
          <tr><td style="padding: 8px; border: 1px solid #e5e7eb;">資服司 UAT（rdssuat）</td><td style="padding: 8px; border: 1px solid #e5e7eb;">比照 SIT 路徑（設定檔裡的 <code>C:/rdss</code> 是舊值，不要照抄）</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #e5e7eb;">正式</td><td style="padding: 8px; border: 1px solid #e5e7eb;">兩台 AP active-standby，<strong>兩台都要搜</strong></td></tr>
        </tbody>
      </table>
      <pre style="margin: 0;">grep -n "ERR 261021-K7M2QX" rdss-api.log</pre>
    </div>

    <!-- 後端寫法 -->
    <div style="margin-bottom: 48px;">
      <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">☕ 後端寫法</h3>
      <p style="margin-bottom: 12px; color: var(--text);">工具類：<code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">moi.rdss.platform.utils.ErrorRef</code></p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <thead>
          <tr style="background: #f3f4f6;">
            <th style="text-align: left; padding: 8px; border: 1px solid #e5e7eb;">方法</th>
            <th style="text-align: left; padding: 8px; border: 1px solid #e5e7eb;">用途</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><code>ErrorRef.logAndMessage(log, "哪個功能", e)</code></td><td style="padding: 8px; border: 1px solid #e5e7eb;">記 log 並回傳給使用者的整句訊息（最常用）</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><code>ErrorRef.log(log, "哪個功能", e)</code></td><td style="padding: 8px; border: 1px solid #e5e7eb;">只記 log，回傳代碼，自己組訊息時用</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><code>ErrorRef.userMessage(code)</code></td><td style="padding: 8px; border: 1px solid #e5e7eb;">用代碼組固定句型</td></tr>
        </tbody>
      </table>

      <n-collapse style="margin-bottom: 24px;" default-expanded-names="example">
        <n-collapse-item name="example">
          <template #header>
            <span style="font-size: 1.1rem; font-weight: 600;">💡 範例</span>
          </template>
          <div style="margin-bottom: 20px;">
            <h4 style="margin-bottom: 12px; font-size: 1rem; color: var(--text);">範例 1：模組化儲存的 catch</h4>
            <pre style="margin: 0;">} catch (Exception e) {
    response.addDetail("公司簡介", false, ErrorRef.logAndMessage(log, "更新公司簡介失敗", e));
    failCount++;
}</pre>
          </div>
          <div style="margin-bottom: 20px;">
            <h4 style="margin-bottom: 12px; font-size: 1rem; color: var(--text);">範例 2：整支 API 的最外層 catch</h4>
            <pre style="margin: 0;">} catch (Exception e) {
    return OperationPlanCh4_4SaveRes.failure(ErrorRef.logAndMessage(log, "2A 研發願景儲存失敗", e));
}</pre>
          </div>
          <div style="margin-bottom: 20px;">
            <h4 style="margin-bottom: 12px; font-size: 1rem; color: var(--text);">範例 3：改之前 ❌ → 改之後 ✓</h4>
            <pre style="margin: 0;">// ❌ 例外原文丟給使用者，log 又多記一次堆疊
log.error("更新公司簡介失敗", e);
response.addDetail("公司簡介", false, "更新失敗: " + e.getMessage());

// ❌ 使用者只看到「處理失敗」，回報時對不回 log
log.error("更新公司簡介失敗", e);
response.addDetail("公司簡介", false, "處理失敗");

// ✓
response.addDetail("公司簡介", false, ErrorRef.logAndMessage(log, "更新公司簡介失敗", e));</pre>
          </div>
        </n-collapse-item>
      </n-collapse>

      <h4 style="margin-bottom: 12px; font-size: 1rem; color: var(--text);">什麼時候不用 ErrorRef</h4>
      <ul>
        <li>業務驗證：直接回原因，例如 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">failure("資料驗證失敗", errorMessages)</code></li>
        <li>可預期且使用者能處理的狀況：例如「查無報名資料，請先完成報名」</li>
        <li>查詢 API 的例外：直接 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">throw</code>，交給 RestApiExceptionHandler 統一處理即可</li>
      </ul>
    </div>

    <!-- 前端規則 -->
    <div style="margin-bottom: 48px;">
      <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">🖥️ 前端規則</h3>
      <ul>
        <li>照後端 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">message</code> 顯示，不自行改寫、不拆解代碼</li>
        <li>模組化儲存回應（<code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">details[]</code> 內有 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">moduleName</code>）：<code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">success:false</code> 一律紅叉顯示，message 以換行拆成多行；main.js 全站處理器已實作，頁面不要再自己跳第二個提示</li>
        <li>不要把 axios error 的 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">error.message</code>（例如 Request failed with status code 500）顯示給使用者</li>
        <li>需要客製訊息的頁面，在 mutation 加 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">meta: { includeGlobalSuccess: false }</code> 自己接，但訊息內容仍須遵守本章規則</li>
      </ul>
    </div>

    <!-- 檢查清單 -->
    <div style="margin-bottom: 48px; padding: 20px; background: #ecfdf5; border-left: 4px solid #059669; border-radius: 8px;">
      <h4 style="margin-bottom: 12px; color: #065f46; font-size: 1.1rem;">✅ 檢查清單</h4>
      <ul style="color: #065f46;">
        <li>catch (Exception e) 裡沒有 e.getMessage() 進回應</li>
        <li>使用者訊息是固定句型加代碼，不是「處理失敗」四個字</li>
        <li>同一個例外只有一行 [ERR ...] log，沒有重複的 log.error</li>
        <li>業務驗證沒有誤用錯誤代碼（使用者看得懂的原因要直接寫）</li>
        <li>前端沒有解析代碼或自行改寫訊息</li>
      </ul>
    </div>

    <!-- 現況 -->
    <div style="padding: 16px; background: #f3f4f6; border-radius: 8px;">
      <h4 style="margin-bottom: 8px; font-size: 1rem; color: var(--text);">📌 現況（2026-10-21）</h4>
      <ul>
        <li>已套用：營運計畫書各章節儲存 API（1A／1B／1C／2A／3A／3B，一般、新申請、原用人、自創）、RestApiExceptionHandler 的 RuntimeException 與 Exception 兩個最後防線</li>
        <li>其他模組的 catch 區塊仍是舊寫法，新寫或改到時一併換成 ErrorRef</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { NCollapse, NCollapseItem } from 'naive-ui'
</script>
