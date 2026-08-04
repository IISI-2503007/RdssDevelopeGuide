import{_ as e,o as r,c as i,a as o}from"./index-CIb0hbJX.js";const a={};function s(c,t){return r(),i("div",null,[...t[0]||(t[0]=[o(`<p class="muted" style="margin-bottom:16px;"> RDSS 前端、後端共用的 commit、push 與上板規範。人員與 AI 使用同一份規則，不強制 Pull Request。 </p><div class="callout" style="margin-bottom:24px;background:#f0fdf4;border-color:#86efac;"><p style="color:#166534;margin:0;line-height:1.8;"><strong>核心原則：</strong>在個人分支整合最新 <code>main</code> 並完成驗證，只推送已驗證的 commit SHA；任何拒絕、衝突或異常差異都停止，絕不強制推送。 </p></div><pre style="margin-bottom:28px;">個人分支完成 commit
  → 確認工作目錄乾淨
  → 合併最新 main
  → 驗證與審查差異
  → 固定本次上板 SHA
  → 最後同步閘門
  → 一般 push
  → 確認 SHA 已進入 main</pre><section style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">第一次使用</h3><div class="grid"><article class="card"><h3>個人設定</h3><pre>git config --local rdss.branchName &quot;&lt;個人分支名稱&gt;&quot;
git config --local rdss.developerName &quot;&lt;開發者姓名&gt;&quot;</pre><ul style="margin-top:12px;"><li><code>&lt;個人分支名稱&gt;</code>：填入自己目前使用的個人分支，必須與 <code>git branch --show-current</code> 的結果相同，且不可填 <code>main</code>。</li><li><code>&lt;開發者姓名&gt;</code>：填入自己的姓名，後續會用於確認 commit 紀錄。</li></ul><p style="margin-top:12px;">請先替換角括號內的文字再執行；前端與後端 repository 必須各設定一次。</p></article><article class="card"><h3>遠端 main 保護</h3><ul><li>禁止 force push。</li><li>禁止刪除 <code>main</code>。</li><li>管理者與 bypass 也不能略過。</li><li>保留一般 direct push；不強制 PR。</li></ul></article></div></section><section style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">請 AI 執行</h3><div class="callout" style="margin-bottom:12px;"><p style="margin:0;color:#3730a3;"> 請先完整讀取開發指南的 <code>15-Git上板流程.md</code>，依規範幫我上板前端及後端，並分別回報驗證與上板結果。 </p></div><p style="color:#64748b;line-height:1.8;"> 只有明確要求「上板」、「併版」或「push」才代表允許遠端 push；僅要求修改、檢查、測試或 commit 時，不代表允許 push。 </p></section><section style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">標準上板流程</h3><article class="card" style="margin-bottom:18px;"><h3>1. 確認 repository 與分支</h3><pre>git rev-parse --show-toplevel
git status --short --branch
git remote -v
$BRANCH_NAME = [string](git config --local --get rdss.branchName)
$DEVELOPER_NAME = [string](git config --local --get rdss.developerName)
$CURRENT_BRANCH = [string](git branch --show-current)
$BRANCH_NAME = $BRANCH_NAME.Trim()
$DEVELOPER_NAME = $DEVELOPER_NAME.Trim()
$CURRENT_BRANCH = $CURRENT_BRANCH.Trim()
git check-ref-format --branch $BRANCH_NAME</pre><p style="margin-top:12px;">repository、remote 與個人設定都必須正確；目前分支必須等於設定的個人分支，且不得位於 <code>main</code>。</p></article><article class="card" style="margin-bottom:18px;"><h3>2. Commit 後確認乾淨</h3><p>只加入本次任務的明確路徑，不使用批次 <code>git add</code>。</p><pre>git status --porcelain</pre><p style="margin-top:12px;">必須完全沒有輸出，否則驗證內容可能與實際 push 的 commit 不一致。</p></article><article class="card" style="margin-bottom:18px;"><h3>3. 取得並合併最新 main</h3><pre>git status --porcelain
git fetch origin main:main
git merge main
git status --porcelain</pre><p style="margin-top:12px;">fetch 被拒、出現 forced update 或 merge conflict 時立即停止。</p></article><article class="card" style="margin-bottom:18px;"><h3>4. 驗證合併後版本</h3><div class="grid"><div><p><strong>後端</strong></p><pre>.\\mvnw.cmd compile -DskipTests</pre></div><div><p><strong>前端</strong></p><pre>npm run lint
npm run build:dev</pre></div></div></article><article class="card" style="margin-bottom:18px;"><h3>5. 審查差異並固定 SHA</h3><pre>git status --porcelain
git diff --name-status main...HEAD
git diff --stat main...HEAD
$DEPLOY_SHA = [string](git rev-parse HEAD)
$DEPLOY_SHA = $DEPLOY_SHA.Trim()</pre><p style="margin-top:12px;">差異只能包含本次任務。後續檢查與兩次 push 都只能使用這個已驗證的 <code>$DEPLOY_SHA</code>。</p></article><article class="card" style="margin-bottom:18px;"><h3>6. 最後同步閘門</h3><pre>git status --porcelain
$CURRENT_SHA = [string](git rev-parse HEAD)
$CURRENT_SHA = $CURRENT_SHA.Trim()
git fetch origin main:main
git merge-base --is-ancestor main $DEPLOY_SHA</pre><p style="margin-top:12px;">工作目錄必須乾淨、<code>$CURRENT_SHA</code> 必須等於 <code>$DEPLOY_SHA</code>，ancestor 指令必須成功；否則重新合併與驗證。</p></article><article class="card" style="margin-bottom:18px;"><h3>7. 推送已驗證 SHA</h3><pre>git push origin &quot;\${DEPLOY_SHA}:refs/heads/\${BRANCH_NAME}&quot;
git push origin &quot;\${DEPLOY_SHA}:refs/heads/main&quot;</pre><p style="margin-top:12px;">先推個人分支，成功後才推同一個 SHA 到 <code>main</code>。任何 push 失敗都停止，禁止 force。</p></article><article class="card"><h3>8. 上板後確認</h3><pre>git fetch origin main:main
git merge-base --is-ancestor $DEPLOY_SHA main
git rev-parse main</pre><p style="margin-top:12px;">ancestor 指令成功，才代表本次 SHA 已存在於遠端 <code>main</code>。</p></article></section><section style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">必須停止的情況</h3><div class="table-wrap"><table><thead><tr><th>情況</th><th>處理</th></tr></thead><tbody><tr><td>個人分支或開發者設定缺少</td><td>停止，先完成 repository-local 設定</td></tr><tr><td>位於 <code>main</code> 或 repository／remote 不明</td><td>停止並重新確認</td></tr><tr><td><code>git status --porcelain</code> 有輸出</td><td>先處理 staged、unstaged、untracked 檔案</td></tr><tr><td>fetch rejected／non-fast-forward／forced update</td><td>停止，請管理者確認 main 歷史</td></tr><tr><td>merge conflict 或驗證失敗</td><td>停止，不 push</td></tr><tr><td>差異包含其他任務、敏感設定或非預期刪除</td><td>停止並修正上板範圍</td></tr><tr><td>HEAD 不等於已驗證 SHA</td><td>重新驗證與審查</td></tr><tr><td>main push 被拒絕</td><td>重新同步、合併與驗證，禁止 force</td></tr><tr><td>上板後 SHA 不是 main 的 ancestor</td><td>不得回報完成</td></tr></tbody></table></div></section><div class="callout" style="background:#fff7ed;border-color:#fdba74;"><p style="color:#9a3412;margin:0;line-height:1.8;"><strong>不使用 PR 的界線：</strong>這套流程能防止一般 push 蓋掉別人的 commit，但不等於程式碼審查。Git 無法判斷一個合法 fast-forward commit 的業務內容是否正確，因此差異審查、必要驗證與遠端禁止 force push 都不能省略。 </p></div>`,8)])])}const l=e(a,[["render",s]]);export{l as default};
