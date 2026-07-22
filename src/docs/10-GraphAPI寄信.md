# Graph API 寄信

> 文件版本：1.0.2
> 建立日期：2026-05-08
> 適用環境：local / SIT / UAT
> 狀態：✅ Phase 2 驗收通過，整理為共用寄信架構規範

---

## 目錄

1. 背景說明
2. 架構定位
3. 架構概覽
4. Azure AD App Registration 資訊
5. 環境設定
6. 核心元件說明
7. 寄信執行流程
8. 新增寄信功能實作順序
9. 開發規範
10. 常見錯誤與排除方式
11. 資安注意事項
12. 同事交接清單
13. 測試驗收記錄

---

## 1. 背景說明

原本系統使用 SMTP（Gmail）寄信，改為透過 Microsoft Graph API 以 OAuth 2.0 Client Credentials 流程寄信。

| 項目 | 舊方式 | 新方式 |
|---|---|---|
| 協定 | SMTP / STARTTLS | HTTPS REST API |
| 驗證 | 帳號密碼 | OAuth 2.0 Client Credentials |
| 寄件人 | Gmail 帳號 | 企業信箱（指定 sender mailbox） |
| Admin Consent | 不需要 | ✅ 需要資訊部門核准 |
| 寄送方式 | SMTP 直接寄送 | Microsoft Graph API sendMail |

---

## 2. 架構定位

本功能是系統共用寄信架構，不是單一 API 專用。

後續只要系統有新的寄信功能，原則上都應沿用既有流程：

```text
業務 API / Service
    ↓
建立 MailInfo
    ↓
透過 DatabaseMailService / MailProcess 寫入 MAIL_INFO
    ↓
排程 ScheduledMailSendJob 掃描待寄信資料
    ↓
GraphMailSender 透過 Microsoft Graph API 寄出
```

### 核心原則

- 業務 Service **不應**直接呼叫 Microsoft Graph API
- 業務 Service **不應**自行取得 OAuth access token
- 業務 Service 只負責建立 `MailInfo` 並寫入 `MAIL_INFO`
- 實際寄送統一由 `ScheduledMailSendJob` 與 `GraphMailSender` 處理
- OAuth Token 統一由 `GraphTokenService` 管理與快取
- Graph API Request Body 統一由 `GraphMailRequestFactory` 轉換
- 寄信成功後統一更新 `MAIL_INFO.status = 'Y'`

---

## 3. 架構概覽

### 寄信流程

```text
業務功能呼叫（例如 sendMailToUnit，或其他需要寄信的 Service）
        ↓
建立 MailInfo
        ↓
DatabaseMailService.apply() / applyReturnId()
        ↓ 寫入 DB
MAIL_INFO (status='N')
        ↓ 排程每 20 秒掃描
ScheduledMailSendJob.produceQueue()
        ↓ 排程每 30 秒消費
ScheduledMailSendJob.consumeQueue()
        ↓
GraphMailSender.send(mailInfo)
        ↓
GraphTokenService.getAccessToken()   → OAuth Token（含快取）
        ↓
GraphMailRequestFactory.build()      → MailInfo 轉 Graph API JSON
        ↓
POST https://graph.microsoft.com/v1.0/users/{sender}/sendMail
        ↓
MAIL_INFO status 更新為 'Y' ✅
```

### 元件職責一覽

| 元件 | 位置 | 職責 |
|---|---|---|
| `GraphMailProperties` | `config/properties/` | 讀取 yml 設定，例如 tenant-id、client-id、client-secret、sender-address |
| `GraphTokenService` | `service/sys/mail/` | 取得 OAuth access token，含快取與到期前 60 秒更新機制 |
| `GraphMailRequestFactory` | `service/sys/mail/` | 將 MailInfo 轉換成 Graph API sendMail request body |
| `GraphMailSender` | `service/sys/mail/` | 呼叫 Graph API 實際寄信，含 401 自動重試 |
| `ScheduledMailSendJob` | `schedule/` | 批次排程：生產者每 20 秒掃描，消費者每 30 秒寄送 |
| `DatabaseMailService` | `service/sys/` | 業務層寄信入口，寫入 MAIL_INFO |
| `MailProcess` | `service/sys/` | 封裝信件模板、資料填充與 MailInfo 建立流程 |

---

## 4. Azure AD App Registration 資訊

> ⚠️ `client-secret` 為機敏資訊，請勿 commit 進 Git，請透過安全管道取得。

| 項目 | 值 | 機敏程度 |
|---|---|---|
| Tenant ID | `54aa2fea-ecb3-4c71-80b3-de9a356e77c1` | 🟡 內部資訊 |
| Client ID | `b6df8fec-2fdb-4d95-8838-7f459ebbc891` | 🟡 內部資訊 |
| Client Secret | 請向負責人或資訊部門取得「用戶端認證」 | 🔴 機敏，勿外洩 |
| Sender Address | `NCATEST@iisigroup.com` | 🟡 內部資訊 |
| OAuth Scope | `https://graph.microsoft.com/.default` | 🟡 內部資訊 |
| Required Permission | `Mail.Send` | 🟡 內部資訊 |
| Admin Consent 狀態 | ✅ Mail.Send 已核准 | — |

---

## 5. 環境設定

### 本機開發（application-local.yml）

> ⚠️ `application-local.yml` 已加入 `.gitignore`，不會被 commit。

```yaml
microsoft:
  graph:
    enabled: true
    tenant-id: 54aa2fea-ecb3-4c71-80b3-de9a356e77c1
    client-id: b6df8fec-2fdb-4d95-8838-7f459ebbc891
    client-secret: 請向負責人取得後填入此處
    sender-address: NCATEST@iisigroup.com
    scope: https://graph.microsoft.com/.default

scheduling:
  mail:
    enabled: true   # 開啟後排程才會自動寄信，測試完建議改回 false
```

### SIT / UAT 環境（application-sit.yml）

```yaml
microsoft:
  graph:
    enabled: true
    tenant-id: 54aa2fea-ecb3-4c71-80b3-de9a356e77c1
    client-id: b6df8fec-2fdb-4d95-8838-7f459ebbc891
    client-secret: ${GRAPH_CLIENT_SECRET}   # 環境變數注入，不可明文寫入
    sender-address: NCATEST@iisigroup.com
    scope: https://graph.microsoft.com/.default

scheduling:
  mail:
    enabled: false   # SIT 預設關閉，避免誤發信
```

### 排程開關說明

| `scheduling.mail.enabled` | 效果 |
|---|---|
| `true` | 排程啟動，自動掃描 `MAIL_INFO` 並寄信 |
| `false` | 排程不啟動，信件會寫入 DB 但不會寄出 |

---

## 6. 核心元件說明

### GraphTokenService

Token Endpoint：`https://login.microsoftonline.com/{tenantId}/oauth2/v2.0/token`

- Token 到期前 60 秒自動重新取得
- 收到 401 時呼叫 `clearCache()` 清除快取後重試一次
- 不可將 access token 完整寫入 log

### GraphMailRequestFactory

| `MailInfo` 欄位 | Graph API 對應 |
|---|---|
| `mailSubject` | `message.subject` |
| `mailContent` | `message.body.content`，自動判斷 HTML / Text |
| `mailTo` | `message.toRecipients`，逗號分隔，自動去重 |
| `mailCc` | `message.ccRecipients` |
| `mailBcc` | `message.bccRecipients` |
| 附件（DB） | `message.attachments`，base64 編碼 |

### GraphMailSender

```text
取得 token → 呼叫 Graph API
    → 若 401 → clearCache() → 重新取 token → 重試一次
    → 若成功 → 回傳成功
    → 若其他錯誤 → 拋出 GraphMailException
```

---

## 7. 寄信執行流程

### Step 1：業務層寫入 MAIL_INFO

```java
// 方式 A：直接 apply，不需要 ID
MailInfo mailInfo = new MailInfo();
mailInfo.setMailTo("receiver@example.com");
mailInfo.setMailSubject("信件主旨");
mailInfo.setMailContent("<p>信件內容</p>");
databaseMailService.apply(mailInfo);

// 方式 B：applyReturnId，需要後續處理附件時使用
databaseMailService.applyReturnId(mailInfo);
// mailInfo.getId() 已有值，可用來新增附件記錄
```

### Step 2：排程自動寄信

| 排程 | 職責 |
|---|---|
| 每 20 秒 | `produceQueue()` 從 DB 撈 `status='N'` 的信放入 Queue |
| 每 30 秒 | `consumeQueue()` 從 Queue 取信，呼叫 `GraphMailSender.send()` |
| 寄送成功 | 更新 `MAIL_INFO.status = 'Y'` |
| 寄送失敗 | 記錄 log，不影響其他信件繼續處理 |

### Step 3：確認寄出

```sql
SELECT ID, MAIL_TO, MAIL_CC, MAIL_SUBJECT, STATUS, CREATION_DATE, MODIFY_DATE
FROM MAIL_INFO
ORDER BY CREATION_DATE DESC;
-- STATUS: N=待寄出 / Y=已寄出 / X=已作廢
```

---

## 8. 新增寄信功能實作順序

**Step 1** — 確認寄信觸發點（哪個業務事件需要寄信）

**Step 2** — 確認收件人來源（TO / CC / BCC 從哪裡取得）；查無收件人時直接回傳訊息，不寫入 MAIL_INFO

**Step 3** — 建立 MailInfo；`mailTo` 必填；CC 不可拆成沒有 TO 的獨立筆

**Step 4** — 寫入 MAIL_INFO
```java
databaseMailService.apply(mailInfo);           // 不需要 ID
databaseMailService.applyReturnId(mailInfo);   // 需要 ID（例如附件）
mailProcess.execute("TemplateName", dataMap);  // 使用信件模板
```

**Step 5** — 由排程自動寄出，業務功能不需直接呼叫 `GraphMailSender`

**Step 6** — 驗證：MAIL_TO 正確、CC 未被拆成空 TO 資料、STATUS 由 N → Y、實際信箱收到信

---

## 9. 開發規範

### 正確的 MailInfo 設定方式

```java
// ✅ 正確：一筆 MailInfo，TO 和 CC 寫在同一筆
MailInfo mailInfo = new MailInfo();
mailInfo.setMailTo("receiver@example.com");
mailInfo.setMailCc("cc@example.com");
databaseMailService.setCommonMailInfo(mailInfo);
databaseMailService.apply(mailInfo);
```

```java
// ❌ 錯誤：將 CC 拆成獨立一筆，且沒有 mailTo
// → mailTo=null 的那筆永遠寄不出去，排程無限重試！
MailInfo ccMailInfo = new MailInfo();
ccMailInfo.setMailCc("cc@example.com");
databaseMailService.apply(ccMailInfo);
```

### 防呆規範（必須加入）

```java
// 防呆1：查無收件對象時，提早回傳
if (receiverList == null || receiverList.isEmpty()) {
    log.warn("查無符合條件的收件者，不寄出任何信件");
    return ReturnMessage.getFailedInstance("查無符合條件的收件者，未寄出任何信件", null);
}

// 防呆2：信箱為空時跳過
for (Receiver receiver : receiverList) {
    if (StringUtils.isBlank(receiver.getEmail())) {
        log.warn("帳號={} 信箱為空，跳過寄信", receiver.getAccount());
        continue;
    }
}
```

---

## 10. 常見錯誤與排除方式

### Graph API 錯誤碼

| HTTP 狀態碼 | 常見原因 | 建議處理 |
|---|---|---|
| `400 Bad Request` | request body 格式錯誤、收件人格式錯誤、附件 base64 錯誤 | 檢查 GraphMailRequestFactory 產出的 JSON、收件人 email、附件內容 |
| `401 Unauthorized` | access token 遺失 / 過期 / 無效，或 client-secret 錯誤 | 確認 tenant-id / client-id / client-secret；系統自動重試一次 |
| `403 Forbidden` | Mail.Send 權限不足或未完成 Admin Consent | 請資訊部門確認 Azure App Registration 的 Mail.Send 權限 |
| `404 Not Found` | sender mailbox 不存在或 sender address 錯誤 | 確認 sender-address 是否為可寄信的 Exchange mailbox |
| `429 Too Many Requests` | 短時間內請求過多，Graph API 節流 | 依 Retry-After 秒數等待後重試 |
| `500 / 502 / 503 / 504` | Microsoft Graph 或 Microsoft 365 服務端暫時異常 | retry with backoff；持續發生請資訊部門確認服務狀態 |

### 排程無限重試（mailTo=null）

```sql
-- 查看待寄出記錄
SELECT ID, MAIL_TO, MAIL_CC, STATUS, CREATION_DATE
FROM MAIL_INFO
WHERE STATUS = 'N'
ORDER BY CREATION_DATE DESC;

-- 確認是異常資料後，將其作廢（建議加日期條件）
UPDATE MAIL_INFO
SET STATUS = 'X', MODIFY_USER = 'MANUAL_CANCEL', MODIFY_DATE = GETDATE()
WHERE STATUS = 'N'
  AND CREATION_DATE >= '2026-05-07';
```

---

## 11. 資安注意事項

| 項目 | 規範 |
|---|---|
| `client-secret` | 🔴 絕對不可 commit 進 Git |
| `access_token` | 🔴 不可完整寫入 log |
| `application-local.yml` | 已加入 `.gitignore`，本機設定不會上傳 |
| `GraphManualIntegrationTest.java` | 若含明文 secret，應加入 `.gitignore` |
| SIT / UAT 的 secret | 透過環境變數 `${GRAPH_CLIENT_SECRET}` 注入，由 IT / DevOps 設定 |
| 完整憑證清單 | 參閱 **azure_graph_mail_server_credentials_inventory_full.md**，向 **PG Leader 或 PM** 取得 |

---

## 12. 同事交接清單

| 資訊 | 說明 | 建議窗口 |
|---|---|---|
| Client Secret / 用戶端認證 | 實際填入 client-secret 的值 | 負責人、資訊部門 |
| SIT / UAT `GRAPH_CLIENT_SECRET` 設定 | 部署環境的 secret 注入 | IT / DevOps |
| Mail.Send Admin Consent | 確認 Azure 權限已核准 | 資訊部門 / Azure AD 管理者 |
| Sender mailbox 狀態 | 確認寄件信箱存在且可使用 | 資訊部門 / Exchange 管理者 |
| 排程開關 | 確認各環境是否允許自動寄信 | PM / SA / IT / DevOps |

---

## 13. 測試驗收記錄

| 階段 | 測試類別 | 日期 | 結果 |
|---|---|---|---|
| Phase 1：取得 OAuth Token | `GraphTokenServiceCacheTest`（2 tests） | 2026-05-06 | ✅ Token 取得成功，快取機制正常 |
| Phase 2：完整寄信測試 | `GraphManualIntegrationTest` | 2026-05-07 | ✅ 202 Accepted，收件信箱確認收到 |
| 整合測試：sendMailToUnit | `POST /QSP042b02/sendMailToUnit` | 2026-05-07 | ✅ 寄出完成，CC Bug 已修正，防呆已新增 |

> `sendMailToUnit` 是本次驗收使用的業務 API 範例，後續其他寄信功能仍應沿用相同的共用流程。

---

> 💡 **一句話總結：** 後續任何需要寄信的業務功能，建立 `MailInfo` 並寫入 `MAIL_INFO`，由排程與 `GraphMailSender` 統一透過 Microsoft Graph API 寄送即可，不需在各業務 API 中自行呼叫 Graph API 或取得 OAuth Token。
