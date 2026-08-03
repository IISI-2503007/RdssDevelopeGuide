import JSZip from 'jszip'
import { saveAs } from 'file-saver'

// 使用 Vite 的 ?raw 語法匯入 md 檔案為純文字
import doc01 from '@/docs/01-API協作規則.md?raw'
import doc02 from '@/docs/02-參數一致性.md?raw'
import doc03 from '@/docs/03-日期與時間格式.md?raw'
import doc04 from '@/docs/04-分頁資料格式.md?raw'
import doc05 from '@/docs/05-API呼叫方式.md?raw'
import doc06 from '@/docs/06-文字欄位長度.md?raw'
import doc07 from '@/docs/07-上傳格式.md?raw'
import doc08 from '@/docs/08-下載格式.md?raw'
import doc09 from '@/docs/09-下拉選單API.md?raw'
import doc10 from '@/docs/10-GraphAPI寄信.md?raw'
import doc11 from '@/docs/11-頁面權限.md?raw'
import doc12 from '@/docs/12-Fortify掃描規則.md?raw'
import doc13 from '@/docs/13-權限模型與最大管理員規範.md?raw'
import doc14 from '@/docs/14-地端啟動與環境DB切換.md?raw'
import doc15 from '@/docs/15-Git上板流程.md?raw'

const docs = [
  { name: '01-API協作規則.md', content: doc01 },
  { name: '02-參數一致性.md', content: doc02 },
  { name: '03-日期與時間格式.md', content: doc03 },
  { name: '04-分頁資料格式.md', content: doc04 },
  { name: '05-API呼叫方式與後端輸入驗證.md', content: doc05 },
  { name: '06-文字欄位長度.md', content: doc06 },
  { name: '07-上傳格式.md', content: doc07 },
  { name: '08-下載格式.md', content: doc08 },
  { name: '09-下拉選單API.md', content: doc09 },
  { name: '10-GraphAPI寄信.md', content: doc10 },
  { name: '11-頁面權限.md', content: doc11 },
  { name: '12-Fortify掃描規則.md', content: doc12 },
  { name: '13-權限模型與最大管理員規範.md', content: doc13 },
  { name: '14-地端啟動與環境DB切換.md', content: doc14 },
  { name: '15-Git上板流程.md', content: doc15 }
]

export async function downloadAllDocs() {
  const zip = new JSZip()
  const folder = zip.folder('RDSS專案-前後端協作規範')

  for (const doc of docs) {
    folder.file(doc.name, doc.content)
  }

  const blob = await zip.generateAsync({ type: 'blob' })
  saveAs(blob, 'RDSS專案-前後端協作規範.zip')
}
