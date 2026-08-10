<template>
  <div class="space-y-8">
    <section>
      <h3 class="text-lg font-bold text-slate-700 mb-3">輸入驗證原則</h3>
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
        <p class="text-sm text-blue-900 mb-2">
          所有外部輸入，不論既有 API 使用哪一種 HTTP method，都必須在後端驗證。RDSS 新增、修改、刪除及敏感／複合查詢原則上使用 POST + DTO；只有無敏感資料、無副作用的簡單查詢使用 GET。
        </p>
        <ul class="list-disc list-inside space-y-1 text-sm text-blue-900">
          <li>所有驗證必須在後端執行；前端驗證只負責使用者體驗。</li>
          <li>字串至少限制最大長度；固定格式／列舉再加白名單驗證。</li>
          <li>敏感資料不得放在 <code class="bg-blue-100 px-1 rounded">@RequestParam</code> 或 <code class="bg-blue-100 px-1 rounded">@PathVariable</code>。</li>
          <li>每支 API 仍須檢查登入者、功能權限與資料歸屬。</li>
        </ul>
        <p class="text-sm text-blue-900 mt-3">
          依據：
          <a href="https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer">OWASP Input Validation</a>、
          <a href="https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-validation.html" target="_blank" rel="noopener noreferrer">Spring MVC Validation</a>、
          <a href="https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md" target="_blank" rel="noopener noreferrer">OWASP ASVS 14.2.1</a>
        </p>
      </div>
    </section>

    <section>
      <h3 class="text-lg font-bold text-slate-700 mb-3">套用方式與責任</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead class="bg-slate-100">
            <tr>
              <th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">機制</th>
              <th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">建議機制</th>
              <th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">必要條件</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="px-4 py-2 font-medium">POST Body 驗證</td>
              <td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded">@Valid + DTO</code></td>
              <td class="px-4 py-2">驗證必填、長度、格式、範圍及必要的巢狀欄位</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="px-4 py-2 font-medium">JSON 字串共用處理</td>
              <td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded">XssStringJsonDeserializer</code></td>
              <td class="px-4 py-2">只能作輔助防護；不能取代輸入驗證與依輸出情境編碼</td>
            </tr>
            <tr class="border-b">
              <td class="px-4 py-2 font-medium">統一例外處理</td>
              <td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded">RestApiExceptionHandler</code></td>
              <td class="px-4 py-2">Body 與 method validation 失敗都須回一致的 400，不得落成 500</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-4 py-2 font-medium">簡單 GET 參數驗證</td>
              <td class="px-4 py-2">Spring MVC method validation</td>
              <td class="px-4 py-2">只接受非敏感且可嚴格驗證的代碼、數字、日期或 enum</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h3 class="text-lg font-bold text-slate-700 mb-3">POST Body 寫法</h3>
      <p class="text-sm text-gray-600 mb-3">
        適用於新增、修改、刪除、敏感或複合查詢。使用 POST 只能避免敏感值成為 URL 的一部分，不能取代授權、業務驗證、SQL 參數化或輸出編碼。
      </p>
      <div class="bg-green-50 border border-green-200 rounded-lg p-4">
        <pre class="bg-green-100 p-3 rounded text-xs overflow-x-auto text-gray-800"><code>@PostMapping("/query")
public ResponseEntity&lt;?&gt; query(@Valid @RequestBody PersonQueryReq req) {
    // Service 仍須檢查登入者可查詢的資料範圍
}

public class PersonQueryReq {
    @Size(max = 10, message = "身分證號長度不可超過10字元")
    private String idNo;

    @Size(max = 50, message = "姓名長度不可超過50字元")
    private String name;
}</code></pre>
      </div>
    </section>

    <section>
      <h3 class="text-lg font-bold text-slate-700 mb-3">簡單 GET 參數寫法</h3>
      <p class="text-sm text-gray-600 mb-3">
        只有無敏感資料、無副作用的簡單查詢才能使用 GET，且只接受可嚴格驗證的代碼、數字、日期或 enum 類參數。新 Controller 優先使用 Spring MVC 6.1+ 內建 method validation；既有 Controller 若保留類別層級 <code>@Validated</code>，統一例外處理還須涵蓋 AOP 可能拋出的 <code>ConstraintViolationException</code>。
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-red-50 border border-red-200 rounded-lg p-4">
          <p class="text-sm font-semibold text-red-700 mb-2">❌ 敏感資料進 URL</p>
          <pre class="bg-red-100 p-3 rounded text-xs overflow-x-auto text-gray-800"><code>@GetMapping("/person")
public ResponseEntity&lt;?&gt; query(
    @RequestParam String idNo) { ... }</code></pre>
        </div>
        <div class="bg-green-50 border border-green-200 rounded-lg p-4">
          <p class="text-sm font-semibold text-green-700 mb-2">✅ 非敏感代碼且有驗證</p>
          <pre class="bg-green-100 p-3 rounded text-xs overflow-x-auto text-gray-800"><code>@RestController
public class ReferenceController {
  @GetMapping("/types")
  public ResponseEntity&lt;?&gt; types(
      @RequestParam
      @Pattern(regexp = "^(A|B)$")
      String type) { ... }
}</code></pre>
        </div>
      </div>
      <p class="text-sm text-gray-600 mt-3">
        例外處理至少涵蓋 <code>MethodArgumentNotValidException</code> 與 <code>HandlerMethodValidationException</code>；使用類別層級 <code>@Validated</code> 時另涵蓋 <code>ConstraintViolationException</code>。
        依據：<a href="https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-validation.html" target="_blank" rel="noopener noreferrer">Spring MVC Validation</a>
      </p>
    </section>

    <section>
      <h3 class="text-lg font-bold text-slate-700 mb-3">常用 Bean Validation</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead class="bg-slate-100">
            <tr>
              <th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">標註</th>
              <th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">用途</th>
              <th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">例</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="px-4 py-2"><code>@NotBlank</code>／<code>@NotNull</code></td>
              <td class="px-4 py-2">必填</td>
              <td class="px-4 py-2">依字串或物件型別選擇</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="px-4 py-2"><code>@Size</code></td>
              <td class="px-4 py-2">字串／集合長度</td>
              <td class="px-4 py-2"><code>@Size(max = 50)</code></td>
            </tr>
            <tr class="border-b">
              <td class="px-4 py-2"><code>@Min</code>／<code>@Max</code>／<code>@Digits</code></td>
              <td class="px-4 py-2">數值範圍與位數</td>
              <td class="px-4 py-2"><code>@Min(0) @Max(9999)</code></td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="px-4 py-2"><code>@Pattern</code></td>
              <td class="px-4 py-2">固定格式／可接受值</td>
              <td class="px-4 py-2"><code>@Pattern(regexp = "^[0-9]+$")</code></td>
            </tr>
            <tr>
              <td class="px-4 py-2"><code>@Email</code></td>
              <td class="px-4 py-2">Email 基本格式</td>
              <td class="px-4 py-2">仍須搭配最大長度</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm text-gray-600 mt-3">
        依據：<a href="https://jakarta.ee/specifications/bean-validation/3.1/" target="_blank" rel="noopener noreferrer">Jakarta Validation 3.1</a>、
        <a href="https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer">OWASP Input Validation</a>
      </p>
    </section>

    <section>
      <h3 class="text-lg font-bold text-slate-700 mb-3">優先補強</h3>
      <div class="bg-rose-50 border border-rose-200 rounded-lg p-4">
        <ol class="list-decimal list-inside space-y-2 text-sm text-rose-900">
          <li>先移除 URL 中的 token、身分證號、姓名、email 等敏感值；含敏感條件改用 POST + DTO。</li>
          <li>補齊 <code>@RequestParam</code>／<code>@PathVariable</code> 的長度、格式、範圍與統一錯誤處理。</li>
          <li>逐一檢查 DTO 的 <code>@Size</code>、格式與業務規則；不得只標 <code>@NotBlank</code>。</li>
          <li>共用驗證與例外處理通過實作、測試及部署確認前，不得宣稱已全域套用。</li>
        </ol>
      </div>
    </section>
  </div>
</template>
