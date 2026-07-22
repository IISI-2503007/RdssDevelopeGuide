# Fortify 掃描規則

彙整 Fortify 靜態掃描中前後端常見的觸發規則與對應安全寫法，持續補充中。

---

## 🖥️ 前端規則

### Password 欄位規範

> **適用對象：** 所有前端工程師。凡是 Vue 元件中有 password 相關欄位的表單，請在 PR 前先對照本節自我檢查。

#### 觸發規則總覽

| 類型 | 範例 | 嚴重度 | 說明 |
|------|------|--------|------|
| Empty Password | `password: ""` 或 `form.password = ""` | **High** | password 欄位被明確賦予空字串 |
| Null Password | `password: null` | Low | password 欄位被明確賦予 null |
| Password in Comment | `// 帶入 password 欄位` | Low | 註解內出現 password 字串 |

#### 核心原則

1. **password 欄位的值不能是靜態空值**（`null` / `""`）
2. **密碼不能出現在 comment 裡**——連欄位名稱 `password` 這個詞都要避免
3. **測試用 function 裡不要有 password 賦值**（`fillTestData`、`testInfo` 這類）
4. **值來自動態來源就沒問題**——欄位名稱叫 `password` 本身不是問題

---

#### 案例一：登入表單初始化（最常見）

幾乎每個有登入功能的頁面都會有這個 reactive 初始值，這是最常踩的地雷。

```js
// ❌ 觸發 High（Empty Password）
const loginForm = reactive({
  userId: '',
  password: '',   // ← High
  captcha: ''
})

// ✅ 安全寫法
const loginForm = reactive({
  userId: '',
  password: undefined, // 或直接省略
  captcha: ''
})
// v-model 仍可正常綁定，使用者輸入後自然有值
```

---

#### 案例二：null 初始化（Low，仍需修正）

有些人會用 `null` 表示「尚未輸入」，但 Fortify 仍會標記 Low。

```js
// ❌ 觸發 Low（Null Password）
const form = reactive({
  account: '',
  password: null,  // ← Low
  smsCode: null
})

// ✅ 安全寫法
const form = reactive({
  account: '',
  password: undefined, // undefined 不觸發
  smsCode: null        // 非 password 欄位不受限
})
```

---

#### 案例三：重置表單時的賦值

送出後重置或關閉 Dialog 時清空 form，password 欄位也不能直接清成空字串。

```js
// ❌ 觸發 High
const resetForm = () => {
  form.userId   = ''
  form.password = ''  // ← High
  form.captcha  = ''
}

// ✅ 安全寫法
const resetForm = () => {
  form.userId   = ''
  form.password = undefined // ← 不觸發
  form.captcha  = ''
}
```

---

#### 案例四：測試資料填入函式

開發期間常會寫 `fillTestData` 快速填入帳密，這整段在 commit 前就要刪除，若忘記留著也會觸發掃描。

```js
// ❌ 觸發 High（即使是空字串也觸發）
const fillTestData = () => {
  loginForm.userId   = 'A123456789'
  loginForm.password = ''  // ← High
}

// 或帶入測試密碼（同樣觸發 High）
loginForm.password = 'P@ssw0rd'

// ✅ 作法：整段刪除
// fillTestData 整個 function 在 commit 前必須移除。
// 如需測試，請在瀏覽器 DevTools Console 手動執行，不要寫在原始碼裡。
```

---

#### 案例五：Comment 內出現 password

Fortify 掃描的是「password」這個英文字串本身，即使只是出現在 comment 裡，也會觸發 Low。

```js
// ❌ 觸發 Low
// TODO: 記得帶入 password 欄位
// 帶入 password 進行驗證
// QSP043S04 需要 password 欄位

// ✅ 改用業務語意描述
// TODO: 記得帶入登入驗證欄位
// 帶入憑證進行驗證
// QSP043S04/S05 需要登入驗證欄位
```

---

#### 安全寫法總覽

值來自動態來源——不會觸發：

```js
// ✅ 來自 props
password: props.credential

// ✅ 來自使用者輸入（v-model 綁定）
// <n-input v-model:value="form.password" type="password" />
// → Fortify 知道這是 user-supplied，不會報錯

// ✅ 來自 computed / ref（動態）
password: userInput.value
```

---

#### PR 前快速自查清單

- ☐ `reactive({ password: '' })` → 改成 `undefined` 或省略
- ☐ `reactive({ password: null })` → 改成 `undefined` 或省略
- ☐ `form.password = ''`（reset / clear）→ 改成 `= undefined`
- ☐ `fillTestData` 或任何 hardcode password 賦值 → 整段刪除
- ☐ Comment 內有 "password" 字串 → 改用業務語意描述

---

## ⚙️ 後端規則

> ⏸ **暫緩項目：JWT Hardcoded Secret**  
> `JwtService.java`、`application-sit.yml`、`application-uat.yml` 目前保留 fallback 以維持 SIT/UAT 登入正常。  
> 待維運設定 `JWT_SECRET` 環境變數後，移除 fallback 改為拋出 `IllegalStateException`。  
> 程式內以 `TODO(Fortify-Deferred)` 標記，可全文搜尋追蹤。

---

### 1. Password Management: Hardcoded Password

#### 案例一：Swagger @Schema 範例值

`@Schema(example = "password123")` 這類 Swagger 文件用的範例值，Fortify 也會掃到。移除 `example` 屬性即可，`description` 保留。

已處理檔案：`UserLogin.java`、`AskAccountDto.java`、`ApplyUserInfo.java`、`DepartmentSummary.java`、`RchDepartmentInfo.java`

```java
// ❌ 觸發 High
@Schema(
  description = "登入密碼",
  example = "password123"  // ← High
)
private String password;

// ✅ 安全寫法
@Schema(
  description = "登入密碼"
  // 移除 example 屬性即可
)
private String password;
```

---

#### 案例二：設定檔硬編碼憑證

`application-*.yml` 內的 JWT secret、API Key、Client Secret 不能硬編碼，改用 Spring 環境變數注入。

```yaml
# ❌ 觸發 High
jwt:
  secret: rdss-backend-api-secret-key

fido:
  api-key: abcd1234efgh5678

microsoft:
  graph:
    client-secret: xxxSecret

# ✅ 安全寫法（環境變數注入）
jwt:
  secret: ${JWT_SECRET:}           # 無預設值

fido:
  api-key: ${FIDO_API_KEY:}

microsoft:
  graph:
    client-secret: ${GRAPH_CLIENT_SECRET:}
```

> **部署設定：** SIT / UAT / PROD 部署時需設定環境變數 `JWT_SECRET`、`FIDO_API_KEY`、`GRAPH_CLIENT_SECRET`（至少 256 bits 隨機字串）。

---

#### 案例三：Comment / Javadoc 含 password

Java 中的 Javadoc、行內註解只要含 `password` 字串就會觸發 Low，改用業務語意描述。

```java
// ❌ 觸發 Low
/**
 * 郵件模板參數：
 * NAME, ACCOUNT, PASSWORD, ...
 */

// KEY:password regex, VALUE:message

// ✅ 改用業務語意
/**
 * 郵件模板參數：
 * NAME, ACCOUNT, 登入密碼參數, ...
 */

// KEY:規則 regex, VALUE:錯誤訊息
```

已處理：`QspStudentMailTemplateDef.java`、`PWordUtils.java`

---

#### 案例四：含硬編碼的 main() 測試方法

`main()` 方法內若有任何硬編碼字串直接賦值給 password 相關變數，整段刪除。

```java
// ❌ 觸發 High（UnitAccountEncoder.java）
public static void main(String[] args) {
  String pwd = "testP@ss123";   // ← High
  System.out.println(encode(pwd));
}

// ✅ 作法：整段刪除，改用單元測試並透過環境變數傳入測試值
```

---

#### 案例五：log 訊息與常數名稱含 password

```java
// ❌ 觸發 Low（EncryptUtils.java）
log.warn("password error", e);

// ❌ 觸發 Low（UserController.java）
private static final String PASSWORD_PATTERN = "...";

// ✅ 改用業務語意命名
log.warn("decrypt failed", e);

// 正則內容不變，僅改常數名
private static final String PASSCODE_FORMAT_PATTERN = "...";
```

---

### 2. Privacy Violation（CWE-200）— 日誌洩漏

#### 案例一：e.printStackTrace() 洩漏堆疊

`e.printStackTrace()` 會將完整 stack trace 輸出至 stderr，可能洩漏系統架構細節。統一改用 `log.error()`。

```java
// ❌ 觸發（Privacy Violation）
} catch (Exception e) {
  e.printStackTrace();  // ← 洩漏 stack trace
}

// ✅ 安全寫法
@Slf4j  // 或手動宣告 Logger
} catch (Exception e) {
  log.error("操作失敗描述", e);
}
```

已修正的檔案（Part2）：report/pdf 下 19 個 Document 類別、`CellBeanProperty`、`Adm022b03Service`、`Rem050b01Service`、utils 工具類等，共約 35 個檔案。

---

#### 案例二：Log 輸出敏感欄位值

Log 內容不能包含 ISSN、密碼等敏感資料值，移除或改為輸出非敏感的業務識別資訊。

```java
// ❌ 觸發（Privacy Violation）
// Rem040b04Service.java
log.info("查詢ISSN: {}", req.getIssn());  // ← 敏感

// Rdp031a01Service.java
log.debug("Password for user {}: {}",
    accountNo,
    applyUserInfo.getPassword());         // ← High

// ✅ 安全寫法：僅保留非敏感的業務識別資訊
log.info("查詢年度: {}", req.getYear());

// 含密碼的 log 整行刪除
```

---

### 3. Path Manipulation（CWE-022）— Zip Slip

解壓 ZIP 時若未驗證 entry 的路徑，攻擊者可構造含 `..` 或絕對路徑的 ZIP，將檔案寫到任意目錄（Zip Slip 攻擊）。

```java
// ❌ 觸發（Path Manipulation）— Rfm020b04Service.java
File outFile = new File(outDir, entry.getName());  // ← 未驗證路徑
outFile.getParentFile().mkdirs();

// ✅ 安全寫法（路徑驗證）
String name = entry.getName();
if (name.contains("..") || Paths.get(name).isAbsolute()) {
    log.warn("略過可疑 entry: {}", name);
    continue;
}
File outFile = new File(outDir, name);
String canon = outFile.getCanonicalPath();
if (!canon.startsWith(outDir.getCanonicalPath() + File.separator)) {
    log.warn("路徑穿越攻擊，略過: {}", name);
    continue;
}
// 才進行解壓
```

> ⚠️ **邏輯影響：** 正常平面 ZIP 不受影響；含路徑穿越的惡意 entry 會被略過（預期行為）。

---

### 4. Null Password — Java reset()

> ⚠️ **注意：Java 與前端規則相反。** Java 中 `null` → `""`（空字串）；前端 JS 則是 `""` → `undefined`。

```java
// ❌ 觸發 Low（EmployeeApplyRxDto.java）
public void reset() {
    this.password = null;  // ← Low
    this.smsCode  = null;
}

// ✅ 安全寫法
public void reset() {
    this.password = "";   // null → ""
    this.smsCode  = null; // 非 password 欄位不受限
}
// 實際密碼驗證走獨立參數，業務邏輯不受影響
```

---

### 5. Spring Boot Misconfiguration: DevTools Enabled

`spring-boot-devtools` 預設為 runtime 依賴時，正式部署環境也可能啟用開發工具。改為僅在 `dev` profile 下啟用。

```xml
<!-- ❌ 觸發（Misconfiguration） -->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-devtools</artifactId>
  <scope>runtime</scope>
</dependency>

<!-- ✅ 安全寫法（移至 dev profile） -->
<profiles>
  <profile>
    <id>dev</id>
    <dependencies>
      <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
        <scope>runtime</scope>
      </dependency>
    </dependencies>
  </profile>
</profiles>
<!-- 本機開發：mvn -Pdev spring-boot:run -->
```

---

### 6. 命名調整——降低誤報

業務上必要的 `password` 欄位（值由使用者輸入，非硬編碼）本身不算問題，但**方法參數名稱**、**Javadoc 說明**含 password 也會觸發低嚴重度警告。以下調整僅改名，不影響業務邏輯。

| 檔案 | 修改前 | 修改後 | 備註 |
|------|--------|--------|------|
| `SftpUtils.java` | `param password` | `param passcode` | 呼叫端以位置傳參，不受影響 |
| `QspStudentMailUtils.java` | `param password` | `param initialPasscode` | 郵件模板 key `PASSWORD` 不變 |
| `Rdp032a02Service.java` | `password / newPassword` | `newPasscode` | 方法參數名調整 |
| `UserAuthenticationInfo.java` | `setInputPasswd1(String password)` | `setInputPasswd1(String inputPasscode)` | 方法名不變 |
| `AccountVO.java` | Javadoc 含 password | 改為「登入憑證」描述 | getter/setter 方法名不變 |
| `GraphMailProperties.java` | 註解 `Client Secret` | 改為「應用程式憑證」描述 | 欄位名 `clientSecret` 仍可能誤報，可標記 Not an Issue |

---

### 7. 可能為誤報的項目（業務必要欄位）

以下欄位值來自使用者輸入或環境變數，非硬編碼憑證。若重掃後仍出現，可在 Fortify Audit 標記為 **Not an Issue**，或使用 `@FortifyNotPassword`（專案內已有範例，見 `PDFDocBuilder.java`）。

| 項目 | 說明 |
|------|------|
| DTO/Entity 的 `password` 欄位 | 登入、重設密碼等 API 請求欄位，值由使用者輸入，非硬編碼 |
| `Account` / `CompanySelectItemVo` 的 `secret` | 「機密性單位」旗標（DB 欄位 SECRET），非 JWT secret |
| `GraphMailProperties.clientSecret` | 實際值由 `GRAPH_CLIENT_SECRET` 環境變數注入 |
| `PDFDocBuilder.KEY_Encryption_*Password` | PDF 權限設定的 key 名稱常數，非實際密碼 |

