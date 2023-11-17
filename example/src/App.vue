<template>
  <DefaultLayout>
    <router-view />
    <kvButton />
  </DefaultLayout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import DefaultLayout from '@/layout/default.vue'
</script>

<style scoped lang="less">
</style>