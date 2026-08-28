<template>
  <div>
    <p class="muted" style="margin-bottom: 24px;">支援回傳檔名或直接二進位串流。</p>

    <div style="margin-bottom: 32px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: #4f46e5;">回傳格式：</h3>
      
      <div class="table-wrap" style="margin-bottom: 24px;">
        <table>
          <thead>
            <tr>
              <th>格式</th>
              <th>說明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong style="font-size: 1.1rem;">Base64</strong></td>
              <td>
                <div style="margin-bottom: 16px;">
                  <strong style="color: #10b981;">適合小型檔案下載</strong>
                </div>
                
                <div style="margin-bottom: 12px;">
                  <strong>優點</strong>
                  <ul style="margin: 8px 0; padding-left: 20px;">
                    <li>可以回傳其他資訊 ex:成功訊息</li>
                  </ul>
                </div>

                <div style="margin-bottom: 12px;">
                  <strong>缺點</strong>
                  <ul style="margin: 8px 0; padding-left: 20px;">
                    <li>檔案變大 33%</li>
                    <li>記憶體負擔大</li>
                  </ul>
                </div>

                <div style="margin-top: 16px;">
                  <strong style="color: #1f2a37;">回傳範例格式：</strong>
                  <pre style="margin-top: 8px;">{
  "statusCode": "200",
  "messageCode": null,
  "message": "執行成功",
  "data": {
    "exportFileData": "77u/LCwsLCzlpKfkuovntIDs...,
    "exportFileName": "大書紀資料明細資料表.csv",
  }
}</pre>
                </div>
              </td>
            </tr>
            <tr>
              <td><strong style="font-size: 1.1rem;">application/octet-stream</strong></td>
              <td>
                <div style="margin-bottom: 16px;">
                  <strong style="color: #10b981;">適合大型檔案下載(需要額外處理 response header Content-Disposition 來取得檔名)</strong>
                </div>
                
                <div style="margin-bottom: 12px;">
                  <strong>優點</strong>
                  <ul style="margin: 8px 0; padding-left: 20px;">
                    <li>效能最佳</li>
                    <li>支援大檔案</li>
                    <li>下載體驗好</li>
                  </ul>
                </div>

                <div style="margin-bottom: 12px;">
                  <strong>缺點</strong>
                  <ul style="margin: 8px 0; padding-left: 20px;">
                    <li>無法回傳其他訊息</li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div style="margin-bottom: 32px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: #4f46e5;">ODS（ODF）匯出：</h3>

      <div class="callout" style="margin-bottom: 20px; background: #eff6ff; border-color: #93c5fd;">
        <p style="color: #1e40af; margin: 0;">
          <strong>快速結論：</strong>需要產 ODS 一律呼叫共用元件
          <code>ReportResponseEntityUtils.writeOds(fileName, workbook)</code>，不要各自去接 LibreOffice。
        </p>
      </div>

      <h4 style="margin-bottom: 10px;">產生方式（兩段式）</h4>
      <div class="table-wrap" style="margin-bottom: 16px;">
        <table>
          <thead>
            <tr><th>順序</th><th>方式</th><th>說明</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>LibreOffice 轉檔</td>
              <td>先把 POI Workbook 寫成 xls/xlsx 暫存檔，再交由 LibreOffice 轉 ODS，版面與原 Excel 一致。</td>
            </tr>
            <tr>
              <td>2</td>
              <td>純 Java 產生（fallback）</td>
              <td>LibreOffice 未安裝、轉檔失敗或結果為空時，自動改走這條路（<code>OdsUtils</code>），API 不會因此失敗。</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="muted" style="margin-bottom: 24px;">目前伺服器的 LibreOffice 仍有問題，實務上大多會落到第 2 條路。</p>

      <h4 style="margin-bottom: 10px;">純 Java 產生的差異（測試重點）</h4>
      <div class="table-wrap" style="margin-bottom: 16px;">
        <table>
          <thead>
            <tr><th>項目</th><th>是否保留</th></tr>
          </thead>
          <tbody>
            <tr><td>多工作表、工作表名稱</td><td>保留</td></tr>
            <tr><td>儲存格顯示文字（含公式計算後的結果、日期／數值顯示格式）</td><td>保留</td></tr>
            <tr><td>字型、顏色、框線等樣式</td><td>不保留</td></tr>
            <tr><td>合併儲存格</td><td>不保留，合併會被拆成各自獨立的儲存格</td></tr>
            <tr><td>第 1 列</td><td>一律當成標題列輸出</td></tr>
            <tr><td>欄寬</td><td>不保留，由試算表軟體自動調整</td></tr>
            <tr><td>圖片、圖表</td><td>不保留</td></tr>
          </tbody>
        </table>
      </div>
      <div class="callout" style="margin-bottom: 24px; background: #fffbeb; border-color: #fcd34d;">
        <p style="color: #92400e; margin: 0;">
          <strong>測試提醒：</strong>測 ODS 下載時，順便比對「舊系統既有報表」與「新產出的 ODS」版面是否相同，有落差回報後端。
        </p>
      </div>

      <h4 style="margin-bottom: 10px;">需要保留合併儲存格的報表</h4>
      <p style="margin-bottom: 10px;">由該報表自行組出 ODS bytes 再回傳，不要走 <code>writeOds</code>：</p>
      <pre style="margin-bottom: 10px;">byte[] odsBytes = OdsUtils.buildOdsBytesWithMerge(
        List.of(new OdsUtils.OdsSheetWithMerge(sheetName, headers, rows)));
return ReportResponseEntityUtils.writeOdsBytes(fileName + ".ods", odsBytes);</pre>
      <p class="muted" style="margin-bottom: 24px;">現行採用此做法的報表：PTM070B03、RFM032B24、薪資查詢報表、學生放棄確認表。</p>

      <h4 style="margin-bottom: 10px;">前端取檔</h4>
      <ul style="margin: 8px 0 0; padding-left: 20px; line-height: 1.9;">
        <li>Content-Type：<code>application/vnd.oasis.opendocument.spreadsheet</code></li>
        <li>以 octet-stream 串流回傳，檔名放在 <code>Content-Disposition</code>（經 URLEncoder 編碼，前端需 decode）</li>
      </ul>
    </div>
  </div>
</template>
