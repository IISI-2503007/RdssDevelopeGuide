import { ref, watchEffect } from 'vue'

// 白天／夜晚模式:存 localStorage,沒存過就跟系統設定;套用方式是 html 加 dark class
const KEY = 'theme'

const readStored = () => {
  try {
    return localStorage.getItem(KEY)
  } catch {
    return null
  }
}

const prefersDark = typeof window !== 'undefined'
  && typeof window.matchMedia === 'function'
  && window.matchMedia('(prefers-color-scheme: dark)').matches

// 網址帶 ?theme=dark 或 ?theme=light 可指定模式(分享連結、截圖用),優先於記憶值
const fromUrl = typeof window !== 'undefined'
  ? new URLSearchParams(window.location.search).get('theme')
  : null
const stored = readStored()
export const isDark = ref(
  fromUrl === 'dark' || fromUrl === 'light'
    ? fromUrl === 'dark'
    : (stored ? stored === 'dark' : prefersDark)
)

export const toggleTheme = () => {
  isDark.value = !isDark.value
}

watchEffect(() => {
  const root = document.documentElement
  root.classList.toggle('dark', isDark.value)
  root.style.colorScheme = isDark.value ? 'dark' : 'light'
  try {
    localStorage.setItem(KEY, isDark.value ? 'dark' : 'light')
  } catch {
    // 無痕或封鎖儲存時只影響記憶,不影響切換
  }
})
