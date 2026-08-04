# 15. Git 上板流程

本章是 RDSS 前端、後端共用的 Git commit、push 與上板正式規範。人員與 AI 必須遵守同一套核心流程。

目前團隊採 `main` 加個人分支模式，不強制 Pull Request。核心做法是：先在個人分支整合並驗證最新 `main`，最後只把已驗證的 commit 以一般 push 更新至遠端 `main`。

---

## 30 秒看懂流程

```text
個人分支完成 commit
  → 確認工作目錄乾淨
  → 取得並合併最新 main
  → 重新驗證前端或後端
  → 檢查真正要進 main 的差異
  → 記錄已驗證 commit SHA
  → 再確認 main 沒有更新
  → 一般 push 個人分支與 main
  → 確認該 SHA 已存在於遠端 main
```

任何拒絕、衝突、驗證失敗或異常差異都必須停止；禁止 force push。

## 適用範圍與授權

- 本流程只適用於前端、後端程式 repository。
- 前端與後端是兩個獨立 repository，必須分別執行、驗證與回報。
- 只有使用者明確要求「上板」、「併版」或「push」時，AI 才可執行遠端 push。
- 僅要求修改、檢查、測試或 commit 時，不代表允許 push。
- 平常只在個人分支開發；正常上板流程不得在本機 `main` 修改或 commit。

請 AI 上板時可使用：

> 請先完整讀取開發指南的 `15-Git上板流程.md`，依規範幫我上板前端及後端，並分別回報驗證與上板結果。

只想檢查時可使用：

> 請先完整讀取開發指南的 `15-Git上板流程.md`，只檢查目前是否符合上板條件，不要 commit、不要 push。

## 個人設定

每位 PG 在前端、後端 repository 各設定一次。先切到自己的個人分支，再把範例值換成自己的資料：

```powershell
git config --local rdss.branchName "alvis"
git config --local rdss.developerName "Alvis"
```

確認設定：

```powershell
git config --local --get rdss.branchName
git config --local --get rdss.developerName
git branch --show-current
```

設定的分支必須與目前分支相同，且不可為 `main`。設定只寫入該 repository 的 `.git/config`，不會被 commit，也不會影響其他 PG。

Repository 管理者必須確認遠端 `main`：

- 禁止 force push。
- 禁止刪除 `main`。
- 管理者與 bypass 權限也不能略過上述限制。
- 保留團隊需要的一般 direct push 權限；本流程不強制 PR。

遠端保護尚未確認前，不可宣稱本流程已完整啟用。

## 絕對禁止事項

- 禁止 `git push --force`、`git push --force-with-lease` 或其他強制更新。
- 禁止刪除遠端 `main`。
- 禁止以 `reset --hard`、`clean`、rebase、amend 等方式改寫已推送的 `main`。
- 禁止在本機 `main` 建立個人 commit 或 merge commit。
- 禁止盲目使用 `git add .`、`git add -A` 或 `git add -u`。
- 禁止提交密碼、私鑰、token、`.env`、`.env.*`、本機設定、`application-local.yml`、`target/`、`dist/` 或 `node_modules/`。
- 同步或 push 遭拒時禁止繞過保護。

## Commit 規則

先檢查所有異動：

```bash
git branch --show-current
git status --short --branch
git diff -- <明確檔案路徑>
git diff --cached -- <明確檔案路徑>
```

只加入本次任務的明確檔案：

```bash
git add <檔案路徑一> <檔案路徑二>
```

Commit 訊息格式：

```text
[模組代號][開發者姓名][修正內容]
```

開發者姓名必須使用 repository-local 的 `rdss.developerName`，不可套用其他人的姓名。

完成必要 commit 後執行：

```bash
git status --porcelain
```

輸出必須完全為空。任何 staged、unstaged 或 untracked 檔案都代表本機驗證內容可能與實際 push 的 commit 不一致。

## 標準上板流程

以下步驟對每個要上板的 repository 分別執行。

### 1. 確認 repository 與個人分支

```powershell
git rev-parse --show-toplevel
git status --short --branch
git remote -v

$BRANCH_NAME = [string](git config --local --get rdss.branchName)
$DEVELOPER_NAME = [string](git config --local --get rdss.developerName)
$CURRENT_BRANCH = [string](git branch --show-current)

$BRANCH_NAME = $BRANCH_NAME.Trim()
$DEVELOPER_NAME = $DEVELOPER_NAME.Trim()
$CURRENT_BRANCH = $CURRENT_BRANCH.Trim()

git check-ref-format --branch $BRANCH_NAME
```

必須確認 repository 與 remote `origin` 正確；個人分支與開發者設定不可為空；`$CURRENT_BRANCH` 必須完全等於 `$BRANCH_NAME`，且不得為 `main` 或 detached HEAD。

### 2. 取得並合併最新 main

保持在個人分支：

```bash
git status --porcelain
git fetch origin main:main
git merge main
git status --porcelain
```

- merge 前後工作目錄都必須乾淨。
- fetch 出現 rejected、non-fast-forward、forced update 或其他失敗時立即停止。這可能代表遠端 `main` 歷史被改寫。
- merge conflict 時立即停止並列出衝突檔案，不得猜測解法後繼續上板。

### 3. 驗證合併後版本

後端至少執行：

```powershell
.\mvnw.cmd compile -DskipTests
```

前端至少執行：

```bash
npm run lint
npm run build:dev
```

Repository 若有更完整的必要測試，仍須一併執行。任一必要驗證失敗即停止。

### 4. 審查上板差異並固定 SHA

```powershell
git status --porcelain
git diff --name-status main...HEAD
git diff --stat main...HEAD
$DEPLOY_SHA = [string](git rev-parse HEAD)
$DEPLOY_SHA = $DEPLOY_SHA.Trim()
```

必須確認：

- 工作目錄完全乾淨。
- 差異只包含本次任務。
- 沒有陌生檔案、敏感設定或非預期刪除。
- 沒有編譯產物、套件目錄或其他不應提交的內容。

`$DEPLOY_SHA` 必須為非空的完整 commit SHA。後續只能檢查及推送這個已完成驗證與差異審查的 commit。

### 5. 上板前最後同步閘門

```powershell
git status --porcelain

$CURRENT_SHA = [string](git rev-parse HEAD)
$CURRENT_SHA = $CURRENT_SHA.Trim()

git fetch origin main:main
git merge-base --is-ancestor main $DEPLOY_SHA
```

- 工作目錄必須仍然乾淨。
- `$CURRENT_SHA` 必須仍完全等於 `$DEPLOY_SHA`。
- ancestor 指令 exit code `0`：本次上板 SHA 包含最新 `main`，可以繼續。
- 非 `0`：驗證期間 `main` 已更新，回到步驟 2，重新 merge、驗證與審查差異。

### 6. 推送已驗證 SHA

推送已驗證版本：

```powershell
git push origin "${DEPLOY_SHA}:refs/heads/${BRANCH_NAME}"
git push origin "${DEPLOY_SHA}:refs/heads/main"
```

必須使用完整目的 ref `refs/heads/...`，讓遠端個人分支第一次建立時也能正確推送。兩次 push 必須使用同一個 `$DEPLOY_SHA`。

只能使用一般 push。若個人分支 push 失敗，不能繼續更新 `main`；若 `main` push 被 rejected 或 non-fast-forward，代表其他人可能已搶先上板，回到步驟 2 重新執行，禁止 force。

### 7. 上板後確認

```powershell
git fetch origin main:main
git merge-base --is-ancestor $DEPLOY_SHA main
git rev-parse main
```

- ancestor 指令 exit code `0`：本次 SHA 已存在於遠端 `main` 歷史中，可以回報成功。
- 非 `0`：本次 SHA 不在遠端 `main`，不得回報完成。

不要求遠端 `main` 與本機 `HEAD` 永遠相同，因為其他人可能在本次上板後又成功上板；只要本次 SHA 仍是 `main` 的 ancestor，就代表本次版本已正確進入主幹。

## 強制停止條件

| 情況 | 處理方式 |
|---|---|
| 個人分支或開發者設定缺少 | 停止，請 PG 完成 repository-local 設定 |
| 目前位於 `main` | 停止，回到正確個人分支重新確認 |
| repository 或 remote 無法確認 | 停止，不 commit、不 push |
| `git status --porcelain` 有任何輸出 | 停止，先釐清 staged、unstaged 或 untracked 檔案 |
| fetch 顯示 rejected、non-fast-forward 或 forced update | 停止，請管理者確認 `main` 歷史 |
| merge conflict | 停止並回報衝突，不可繼續 push |
| 驗證失敗 | 停止，不 push |
| 差異包含非本次任務、敏感設定或非預期刪除 | 停止並修正上板範圍 |
| `HEAD` 與 `$DEPLOY_SHA` 不一致 | 停止，重新驗證與審查 |
| 最後同步閘門失敗 | 回到同步、merge 與驗證步驟 |
| 個人分支 push 失敗 | 停止，不更新 `main` |
| `main` push 被拒絕 | 回到同步、merge 與驗證步驟，禁止 force |
| 上板後本次 SHA 不是 `main` 的 ancestor | 不可回報完成，先確認遠端狀態 |

## 不使用 PR 的界線

本流程可防止一般 push 蓋掉別人的 commit，也能攔截遠端歷史改寫、驗證期間競爭與大量異常差異，但不等於程式碼審查制度。

- Git 只能阻止非 fast-forward，無法判斷一個合法 fast-forward commit 的業務內容是否正確。
- 若團隊沒有人審 PR，僅增加 PR 步驟並不會自動提高品質。
- 不使用 PR 時，更必須落實遠端禁止 force push、差異審查、必要驗證及停止條件。
- 若未來具備固定 reviewer 或 CI，可再將人工審查或自動檢查加入 `main` 的伺服器端閘門。

## 完成回報

每個 repository 分別回報：

- 前端或後端及個人分支名稱。
- 本次 `$DEPLOY_SHA`。
- 已執行的驗證及結果。
- 個人分支 push 結果。
- 遠端 `main` push 結果。
- 本次 SHA 是否存在於遠端 `main` 的核對結果。

只有前端與後端各自完成全部步驟時，才能回報「前後端均已上板完成」。
