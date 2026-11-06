<template>
  <n-config-provider
    :theme="isDark ? darkTheme : null"
    :theme-overrides="themeOverrides"
    abstract
  >
    <n-message-provider placement="top-right">
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import { NConfigProvider, NMessageProvider, darkTheme } from 'naive-ui'
import { isDark } from '@/utils/theme'

/**
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = {
  common: {
    fontFamily: 'Microsoft JhengHei',
  }
}
</script>

<style>
@import './style.css';
</style>
