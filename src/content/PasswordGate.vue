<template>
  <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:52px 16px;">
    <div style="width:100%;max-width:360px;">
      <!-- Icon + heading -->
      <div style="text-align:center;margin-bottom:24px;">
        <div style="display:inline-flex;align-items:center;justify-content:center;width:64px;height:64px;background:#f1f5f9;border-radius:50%;margin-bottom:12px;">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>
        <h3 style="font-size:1.15rem;font-weight:700;color:#334155;margin:0 0 6px;">此章節受保護</h3>
        <p style="color:#64748b;font-size:0.9rem;margin:0;">請輸入密碼以檢視內容</p>
      </div>

      <!-- Password form -->
      <form @submit.prevent="handleSubmit" style="display:flex;flex-direction:column;gap:10px;">
        <input
          ref="inputRef"
          v-model="pwd"
          type="password"
          placeholder="請輸入密碼"
          autocomplete="new-password"
          :style="{
            padding: '10px 14px',
            border: hasError ? '1.5px solid #ef4444' : '1.5px solid #e2e8f0',
            borderRadius: '8px',
            fontSize: '0.95rem',
            outline: 'none',
            width: '100%',
            boxSizing: 'border-box',
            transition: 'border-color 0.15s'
          }"
          @input="hasError = false"
        />
        <button
          type="submit"
          :disabled="isChecking || !pwd.trim()"
          style="padding:10px;background:#4f46e5;color:#fff;border:none;border-radius:8px;font-size:0.95rem;font-weight:600;cursor:pointer;transition:background 0.2s;opacity:1;"
          :style="{ opacity: (isChecking || !pwd.trim()) ? '0.55' : '1', cursor: (isChecking || !pwd.trim()) ? 'not-allowed' : 'pointer' }"
        >
          {{ isChecking ? '驗證中…' : '解鎖' }}
        </button>
        <p v-if="hasError" style="color:#ef4444;font-size:0.875rem;margin:2px 0 0;text-align:center;">
          密碼錯誤，請重試
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const emit = defineEmits(['unlock'])

// SHA-256 hash of the access password, split into segments.
// The plain-text password is never stored in source.
const _k = [
  '18da6d36', 'a2e5a360', '5f78996e',
  '04fa4c89', '51482ca8', '83a7c8be',
  '7bbfe3d6', '686f2f96'
]

const pwd = ref('')
const hasError = ref(false)
const isChecking = ref(false)
const inputRef = ref(null)

onMounted(() => {
  inputRef.value?.focus()
})

const _digest = async (str) => {
  const buf = await globalThis.crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(str)
  )
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

const handleSubmit = async () => {
  if (!pwd.value.trim() || isChecking.value) return
  isChecking.value = true
  try {
    const h = await _digest(pwd.value)
    if (h === _k.join('')) {
      emit('unlock', h.slice(0, 16))
    } else {
      hasError.value = true
    }
  } finally {
    isChecking.value = false
  }
}
</script>
