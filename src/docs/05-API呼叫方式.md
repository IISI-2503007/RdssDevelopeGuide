# 5. API 呼叫方式與 HTTP Method 安全規範

> 修訂日期：2026-08-10
>
> 適用範圍：`rdss_front` 與 `rdss_backend_api_new` 的新 API、既有 API 修改及 code review

本規範不再把「SSDLC」解釋為「所有 API 一律 POST」。HTTP method 應依操作語意、資料敏感度與現有系統相容性選擇；安全控制的重點是：**敏感資料不得出現在 URL、GET 不得改變狀態、所有輸入都要驗證、每支 API 都要做授權檢查，且不得把敏感資料寫入 log 或 cache。**

**RDSS method 預設規則：只有無敏感資料、無副作用的簡單查詢使用 GET；敏感／複合查詢，以及新增、修改、刪除、寄送、送審等業務動作均使用 POST。既有 PUT／PATCH／DELETE 契約可維持，但新 API 原則上不新增這三種 method。**

> **引用說明：** 外部連結是本規範採用的安全控制依據；「RDSS 現階段採用原則」、生效範圍與優先序，是依現有前後端架構制定的落地方式，不代表外部規範逐字指定 RDSS 必須採用特定 endpoint 或程式寫法。

---

## 一、規範依據與已更正觀念

1. NIST SSDF（SP 800-218）是可依風險、成本與可行性調整的安全開發流程框架，沒有規定 API 必須使用哪一種 HTTP method。（[NIST SP 800-218 SSDF](https://csrc.nist.gov/pubs/sp/800/218/final)）
2. CWE-598 與 OWASP ASVS v5.0.0-14.2.1 管制的是「敏感資料出現在 URL／query string」，不是禁止 GET 本身。（[CWE-598](https://cwe.mitre.org/data/definitions/598.html)、[OWASP ASVS V14 Data Protection](https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md)）
3. HTTPS 保護傳輸中的 HTTP request；GET 與 POST 都必須使用 HTTPS。POST Body 的優點是資料不會成為 URL 的一部分，較不易落在 browser history、access log、proxy log 或 Referer，而不是「只有 POST 才會加密」。（[OWASP REST Security — HTTPS](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html#https)）
4. GET 的 safe 語意及 GET／PUT／DELETE 的 idempotent 語意會影響 cache、prefetch 與失敗重試；不得只為形式統一而忽略方法語意。（[RFC 9110 §9.2 Common Method Properties](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2)）
5. CORS 的 `allowedMethods` 只決定瀏覽器跨來源請求範圍，不等於伺服器端的 HTTP method allowlist；端點仍須拒絕未允許的方法。（[OWASP REST Security — Restrict HTTP methods](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html#restrict-http-methods)）

---

## 二、敏感資料定義

符合下列任一項即視為敏感資料；清單是最低要求，業務或法規另有較嚴格分類時從其規定：

- **個人資料：** 姓名、身分證號／居留證號、生日、電話、email、地址、照片、學經歷、任職、薪資、金融帳戶、健康或其他可直接／間接識別自然人的資料。
- **認證與憑證：** password、JWT／access token／refresh token、API key、session ID、OTP、驗證碼、憑證私密資料。
- **受保護業務資料：** 申請、審查、申訴、役男、單位人員、權限、未公開統計與檔案等資料，以及能直接定位這些資料的具意義識別碼。
- **含上述資料的查詢條件或組合：** 即使單一欄位看似普通，只要組合後可識別個人或定位受保護案件，也視為敏感。

不透明系統流水號／UUID 並非當然安全。其本身不得包含敏感業務意義，後端仍須針對目前登入者做物件層級授權檢查（防 IDOR）；高風險資源宜再採不可合理猜測的識別碼，但不可用「難猜」取代授權。

對應依據：[OWASP ASVS V14 Data Protection](https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md)、[OWASP API1:2023 Broken Object Level Authorization](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/)

---

## 三、HTTP method 決策規則

### 3.1 決策表

| 情境 | method | 參數位置 | 必要條件 | 官方參考 |
|---|---|---|---|---|
| 無副作用、無敏感 URL 參數的簡單查詢 | `GET` | Query string；或無參數 | 可安全重試／prefetch；參數須驗證 | [RFC 9110 §9.2.1 Safe Methods](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.1)、[OWASP Input Validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html) |
| 查詢條件含敏感資料、複合 DTO 或大量條件 | `POST` | JSON Body | 後端 `@Valid @RequestBody`；不得因 POST 而省略授權 | [CWE-598](https://cwe.mitre.org/data/definitions/598.html)、[OWASP ASVS 14.2.1](https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md) |
| 新增或觸發業務動作 | `POST` | JSON Body／multipart | 不得用 GET；重送風險須由業務邏輯處理 | [RFC 9110 §9.2.1 Safe Methods](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.1)、[RFC 9110 §9.3.3 POST](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.3.3) |
| 完整／局部修改 | `POST` | JSON Body | RDSS 新 API 預設使用 action-style POST；既有 PUT／PATCH 契約可維持 | [RFC 9110 §9.3.3 POST](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.3.3)；POST 為 RDSS 落地決策 |
| 刪除資源 | `POST` | JSON Body | RDSS 新 API 預設使用 action-style POST；敏感識別資料放 Body，且必須做物件層級授權；既有 DELETE 契約可維持 | [RFC 9110 §9.3.3 POST](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.3.3)、[OWASP API1:2023 BOLA](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/) |
| 檔案下載 | `GET` 或 `POST` | 無敏感條件可 GET；含敏感條件用 POST Body | 回應依內容決定 `Cache-Control`；需驗證下載權限 | [OWASP ASVS 14.2.1／14.3.2](https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md)、[OWASP API1:2023 BOLA](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/) |

表內官方來源說明通用安全控制；新 API 預設採 action-style POST 是 RDSS 依現況制定的落地規則，不代表 RFC 或 OWASP 強制所有異動一律使用 POST。

### 3.2 RDSS 現階段採用原則

- **既有 API：契約優先。** 前端 method 必須與後端 Controller 的實際 mapping 一致，不得只因本規範發布就單邊改 method。
- **新 API／契約異動：依 RDSS 預設規則選擇。** 簡單非敏感只讀查詢使用 GET；其餘查詢與業務動作使用 POST。除非外部介接契約或架構審查明確要求，新 API 不新增 PUT／PATCH／DELETE。
- **既有 PUT／PATCH／DELETE：契約未異動前維持。** 不得為統一形式而單邊改成 POST；需要改 method 時仍須前後端同步與回歸驗證。
- **POST 查詢可以保留。** RDSS 現有大量查詢使用 POST Body；若條件含敏感資料或是複合 DTO，這仍是正確且可執行的選擇。
- **GET 僅能讀取。** 寄信、登出、更新計數、產檔、儲存、刪除、送審等有副作用操作不得新增為 GET。
- **method 不是授權控制。** 每支 API 仍須依 `11-頁面權限.md` 與 `13-權限模型與最大管理員規範.md` 驗證身分、功能權限及資料歸屬。

---

## 四、URL 與參數規則

### 4.1 必須遵守

- 敏感資料不得出現在 URL 的任何部分，包含 path、query string、fragment（fragment 不會送至 server，但仍可能留在 client 紀錄）。
- token、API key、session ID、OTP、身分證號、姓名、email 等不得放在 `@RequestParam` 或 `@PathVariable`。
- 不得以 `POST /path?account=...` 規避規則；只要資料仍在 URL 就不合格。
- `@RequestParam`／`@PathVariable` 必須有長度、格式、範圍與可接受值驗證；Controller 類別需啟用可生效的 method validation。
- 前端不得手工串接 query string；使用 Axios `params`，並確認值不屬於敏感資料。
- URL 中的資源 ID 必須搭配後端物件層級授權檢查，不能只判斷「已登入」。

對應依據：[CWE-598](https://cwe.mitre.org/data/definitions/598.html)、[OWASP ASVS 14.2.1](https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md)、[OWASP API1:2023 BOLA](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/)

### 4.2 範例

```text
# ✅ 非敏感代碼查詢
GET /RDP011A03/parentType

# ✅ 含個資的複合查詢（示意端點，非既有 API 契約）
POST /QSP020B01/query
{
  "idNo": "A123456789",
  "name": "王小明",
  "pageNo": 1,
  "pageSize": 15
}

# ❌ POST 仍把敏感資料放在 URL
POST /QSP020B01/query?idNo=A123456789

# ❌ 敏感識別碼放在 path
GET /api/person/A123456789/detail
```

若第三方 SSO／OAuth callback 的既定協定無法避免 URL 參數，必須限縮為協定必要欄位、使用短效且不可預測的 code/state、避免記錄完整 URL，並由資安／架構審查確認；不得把此例外套用到一般 RDSS API。

---

## 五、後端實作規範（Spring Boot）

### 5.1 非敏感 GET

```java
@RestController
@RequestMapping("/RDP011A03")
public class Rdp011a03Controller {

    @GetMapping("/parentType")
    public ResponseEntity<?> parentType() {
        // 查詢不得改變資料；仍須執行必要的身分與權限檢查
    }
}
```

官方參考：[RFC 9110 §9.2.1 Safe Methods](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.1)、[OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)

### 5.2 含敏感／複合條件的 POST 查詢

```java
@PostMapping("/query")
public ResponseEntity<?> query(@Valid @RequestBody PersonQueryReq req) {
    // Service 仍須依登入者檢查可查詢的資料範圍
}

public class PersonQueryReq {
    @Size(max = 10, message = "身分證號長度不可超過10字元")
    private String idNo;

    @Size(max = 50, message = "姓名長度不可超過50字元")
    private String name;
}
```

官方參考：[CWE-598](https://cwe.mitre.org/data/definitions/598.html)、[OWASP ASVS 14.2.1](https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md)、[Spring MVC Validation](https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-validation.html)

### 5.3 禁止用 GET 執行異動

```java
// ❌ GET 具有登出／異動副作用
@GetMapping("/logout")
public ResponseEntity<?> logout() { ... }

// ✅ 沿用 RDSS action-style 契約
@PostMapping("/logout")
public ResponseEntity<?> logout() { ... }
```

官方參考：[RFC 9110 §9.2.1 Safe Methods](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.1)、[RFC 9110 §9.3.3 POST](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.3.3)

### 5.4 驗證要求

1. JSON Body 使用 `@Valid @RequestBody` + DTO Bean Validation。（[Spring MVC Validation](https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-validation.html)、[Jakarta Validation 3.1](https://jakarta.ee/specifications/bean-validation/3.1/jakarta-validation-spec-3.1)）
2. `@RequestParam`／`@PathVariable` 使用可生效的 method validation + 參數標註。（[Spring MVC Validation](https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-validation.html)）
3. 所有字串至少定義最大長度；有固定格式／列舉時再加 `@Pattern` 或 enum 驗證。（[OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)、[Jakarta Validation 3.1](https://jakarta.ee/specifications/bean-validation/3.1/jakarta-validation-spec-3.1)）
4. 驗證必須在後端執行，前端驗證只負責使用者體驗。（[OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)）
5. 不得因現有 `XssStringJsonDeserializer` 而省略長度、格式、SQL 參數化或輸出編碼。（[OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)、[OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)）

統一例外處理必須涵蓋 `MethodArgumentNotValidException` 與 `HandlerMethodValidationException`；若既有 Controller 保留類別層級 `@Validated` 並透過 AOP 執行 method validation，也須涵蓋 `ConstraintViolationException`。驗證失敗應回傳一致的 400 格式，不得落成 500。（[Spring MVC Validation](https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-validation.html)）

含自由文字的查詢優先使用 POST + DTO；若使用 GET，只接受可嚴格白名單驗證的代碼、數字、日期或 enum 類參數，並確認 method validation 與錯誤回應確實生效。（[OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)、[OWASP ASVS 14.2.1](https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md)）

---

## 六、前端實作規範（Vue 3 + Axios + TanStack Query）

### 6.1 非敏感 GET

```javascript
export const useParentTypes = () =>
  useQuery({
    queryKey: ['/RDP011A03/parentType'],
    queryFn: () => instanceV2.get('/RDP011A03/parentType'),
  })
```

### 6.2 含敏感／複合條件的 POST 查詢

```javascript
export const usePersonQuery = criteria =>
  useQuery({
    queryKey: ['/QSP020B01/query', criteria],
    queryFn: () => instanceV2.post('/QSP020B01/query', criteria),
  })
```

### 6.3 Query／Mutation 的判斷

- `useQuery`：只讀、可重新抓取的操作；即使後端因敏感條件而使用 POST，仍可用 `useQuery`。
- `useMutation`：會新增、修改、刪除、寄送、送審、產生一次性結果或需由使用者主動觸發的操作。
- 不可只看 GET／POST 決定 Query／Mutation；應看 API 是否有副作用。
- `queryKey` 若包含個資，只存在記憶體中且不得另行輸出到 console、持久化 storage 或監控事件；若未來啟用 query cache 持久化，須先重新做敏感資料審查。

套件行為參考：[TanStack Vue Query — Queries](https://tanstack.com/query/latest/docs/framework/vue/guides/queries)、[Mutations](https://tanstack.com/query/latest/docs/framework/vue/guides/mutations)、[Query Keys](https://tanstack.com/query/latest/docs/framework/vue/guides/query-keys)。「依副作用選擇 Query／Mutation」是 RDSS 為避免自動重抓造成異動的使用約束。

前端只能透過 `src/api/axios.js` 匯出的 `instance`／`instanceV2` 呼叫 API，不得另建 Axios instance、不得把 token 放 URL，也不得用 `console.*` 輸出 request／response。

---

## 七、日誌、Cache、CSRF 與 method 控管

### 7.1 日誌

- 禁止輸出完整 request、DTO、request body、response、Authorization header 或完整 URL。
- 禁止記錄第二章所列敏感值；錯誤 log 也不得把整包參數帶入。
- 可記錄：功能代碼、結果狀態、筆數、耗時、非敏感 enum／年度、後端產生的 correlation ID。
- POST Body 不會自動進 access log，但應用程式自己 `log.info("{}", req)` 仍會洩漏；不得把「改成 POST」視為 log 遮罩。

詳細 Fortify 寫法見 `12-Fortify掃描規則.md`。

對應依據：[CWE-532: Insertion of Sensitive Information into Log File](https://cwe.mitre.org/data/definitions/532.html)、[OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)

### 7.2 Cache 與安全 headers

- 回應含敏感資料時必須回 `Cache-Control: no-store`；檔案下載亦同。
- 全站必須使用 HTTPS；HSTS、Referrer-Policy 與反向代理／閘道的 URL log 遮罩需由部署設定一併確認。
- 在共用 interceptor／gateway 尚未建置全域規則前，開發者不得在文件中宣稱已全域套用；高風險 API 需逐支確認 response header。

對應依據：[OWASP ASVS 14.3.2](https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md)、[OWASP HTTP Security Response Headers](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html)

### 7.3 CSRF

- CSRF 風險取決於瀏覽器是否會自動附帶認證資訊，不取決於 method 是否統一 POST。
- RDSS 採前端明確加入 `Authorization: Bearer ...`、後端不以 Cookie／HTTP Session 作為登入認證且維持 stateless 時，可依此威脅模型停用 CSRF；`withCredentials: false` 只能作為跨來源設定佐證，不能單獨作為停用 CSRF 的理由。
- 若改用 Cookie／Session／SSO Cookie 等瀏覽器自動附帶的認證，或新增可被一般 form 直接送出的認證流程，必須重新威脅建模並啟用適當 CSRF 防護。
- GET 永遠不得執行狀態異動。

對應依據：[OWASP Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)

### 7.4 HTTP method 控管

- 每支 Controller 端點必須明確使用 `@GetMapping`／`@PostMapping`／`@PutMapping`／`@PatchMapping`／`@DeleteMapping`，不得用未限制 method 的 `@RequestMapping` 暴露操作。
- 不支援的 method 應回 405；不得以 fallback Controller 接住後改執行其他操作。
- TRACE／TRACK 必須在 servlet container／reverse proxy 停用；OPTIONS／HEAD 是否開放依 CORS、health check 與實際端點需求決定。
- 現有 CORS 允許清單不是安全閘道 allowlist；正式環境仍須驗證 reverse proxy／WAF 設定。

對應依據：[OWASP REST Security — Restrict HTTP methods](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html#restrict-http-methods)、[RFC 9110 §15.5.6 — 405 Method Not Allowed](https://www.rfc-editor.org/rfc/rfc9110.html#section-15.5.6)

---

## 八、生效範圍與過渡策略

### 8.1 生效範圍

- **新增 API，或異動 method／path／request／response 契約：** 必須完整遵守本規範。
- **未異動的既有 API：** 不因本規範發布就全面轉換 method；若弱掃或人工審查發現問題，另依風險分級處理。
- **因一般功能而觸及既有 API：** P0／P1 或實際弱掃 High／Critical 為 PR 阻擋項目；P2 能低風險完成時一併修正，否則建立安全改善事項並完成風險註記；P3 列入技術債。
- **前後端契約異動：** 必須同批修改、驗證與發布，不得只改單側。
- **共用安全能力：** 在實作、部署及驗證完成前，不得於 PR 或文件宣稱已全域套用。

過渡原則依據：[NIST SSDF — risk-based adoption](https://csrc.nist.gov/projects/ssdf)

### 8.2 不採齊頭式 method 改寫

規範生效不代表立刻把既有 GET、PUT、PATCH 或 DELETE 改成 POST。既有契約可維持；只有新增 API 或經評估確定要異動契約時，才套用 RDSS 的 GET／POST 預設規則。改 method 可能影響 cache、retry、下載、WAF 與外部串接，必須前後端同步修改與驗證。

### 8.3 修正優先序

1. **P0：** URL 含 token、password、session、OTP、API key、身分證號等憑證／高度敏感資料。
2. **P1：** GET 有狀態異動；URL 含姓名、email、帳號、案件資訊等敏感條件；path 使用具業務意義識別碼且授權不足。
3. **P1：** 完整 request／DTO／response 或敏感欄位被寫入 log。
4. **P2：** 敏感回應未設 `Cache-Control: no-store`；`@RequestParam`／`@PathVariable` 缺少驗證。
5. **P3：** 無敏感資料且無副作用的既有 GET；可維持，後續只改善命名、驗證或 cache policy。

每次功能修改採「碰到就檢查」：若本次改動觸及既有 API，依 8.1 的生效範圍與上述優先序處理；未觸及的存量及非阻擋項目另開安全改善任務，不得在沒有評估回歸風險時混入一般功能修正。

---

## 九、PR 檢核清單

- [ ] method 與後端 Controller mapping 一致，且符合操作語意。
- [ ] GET／HEAD 沒有新增、修改、刪除、寄送、送審或其他副作用。
- [ ] URL path／query 不含敏感資料；POST 也沒有用 `params` 偷帶敏感值。
- [ ] Body 使用 DTO + `@Valid`；URL 參數有長度、格式、範圍／enum 驗證。
- [ ] Service 有登入者、功能權限與資料歸屬檢查，沒有 IDOR。
- [ ] 前端透過既有 Axios instance 呼叫，Query／Mutation 依副作用選擇。
- [ ] 沒有輸出完整 request／DTO／response／token／敏感欄位到 log 或 console。
- [ ] 敏感回應與下載已確認 `Cache-Control: no-store`。
- [ ] method 異動已同步修改前後端、API 文件、人工驗證案例及 WAF／proxy 設定（如適用）。
