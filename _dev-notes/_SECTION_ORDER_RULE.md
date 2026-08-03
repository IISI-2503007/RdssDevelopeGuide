# 章節排序規則

> 本文件記錄 `src/views/Home.vue` 中 `sections` 陣列的排序慣例，
> 所有維護者在新增或調整章節時，**必須遵守此規則**。

---

## ⚠️ 核心規則

**「測試環境」與「測試帳號」兩個章節永遠排在 sections 陣列的最後兩項。**

```
...所有規範章節...
  ↓
倒數第二：測試環境（TestEnvironment.vue）
最後一項：測試帳號（TestAccounts.vue）
```

---

## 目前章節順序（2026-08-03）

| 順序 | id | 標題 | 元件 |
| --- | --- | --- | --- |
| 1 | `section-1` | API 協作規則 | ApiFormat.vue |
| 2 | `section-2` | 參數一致性 | ResponseStructure.vue |
| 3 | `section-3` | 日期與時間格式 | DateTimeFormat.vue |
| 4 | `section-4` | 分頁資料格式 | PaginationFormat.vue |
| 5 | `section-5` | API 呼叫方式 | ApiCallMethod.vue |
| 6 | `section-6` | 文字欄位長度 | TextFieldLength.vue |
| 7 | `section-7` | 上傳格式 | UploadFormat.vue |
| 8 | `section-8` | 下載格式 | DownloadFormat.vue |
| 9 | `section-9` | 下拉選單 API | DropdownApi.vue |
| 10 | `section-10` | GraphAPI 寄信 | GraphMailSpec.vue |
| 11 | `section-11` | 頁面權限 | PagePermission.vue |
| 12 | `section-12` | Fortify 掃描規則 | FortifyRules.vue |
| 13 | `section-13` | 權限模型與最大管理員規範 | PermissionModel.vue |
| 14 | `section-14` | 地端啟動與環境 DB 切換 | LocalEnvironment.vue |
| 15 | `section-15` | Git 上板流程 | GitWorkflow.vue |
| **16（倒數第二）** | `appendix` | **測試環境** ⚠️ | TestEnvironment.vue |
| **17（最後）** | `section-last` | **測試帳號** ⚠️ | TestAccounts.vue |

---

## 新增章節時的 SOP

1. 在 `src/views/Home.vue` 的 `sections` 陣列中，將新章節**插入到「測試環境」的上方**。
2. 更新上方表格的順序紀錄。
3. 若新章節有對應 Markdown 文件，同步在 `src/utils/downloadDocs.js` 加入匯入與清單項目。
4. 更新 `Home.vue` header 的「最後編輯日期」。

---

## 違反規則的影響

若「測試環境」或「測試帳號」未排在最後，會導致：

- 使用者在閱讀規範時先看到測試資訊，閱讀邏輯錯亂。
- 側邊欄目錄順序不符合預期，影響導覽體驗。

---

## 文件命名規則

`src/docs/` 下的 md 檔命名格式：`數字-主題.md`

- 主題用最短的詞描述內容，不加「規範／格式／說明／指南」等贅字
- 放在這裡的就是規範，不需要再強調
- 參考既有命名：`API協作規則`、`參數一致性`、`上傳格式`、`GraphAPI寄信`
