<template>
  <button class="kv-button" :class="buttonStyle">
      <slot />
      <i v-show="buttonProps.icon" :class="[`${buttonProps.icon}`]"></i>
    </button>
</template>

<script lang='ts'>
export default {
  name: 'KvButton'
}
</script>
<script setup lang='ts'>
import {ref, computed} from 'vue'
import './style/index.less'
type ButtonProps = {
  type?: string,
  plain?: boolean,
  round?: boolean,
  circle?: boolean,
  icon?: string,
}
// withDefaults设置props默认值
const buttonProps = withDefaults(defineProps<ButtonProps>(), {
  type: '',
  plain: false,
  round: false,
  circle: false,
  icon: '',
})
const buttonStyle = computed(() => {
  return {
    [`kv-button--${buttonProps.type}`]: !!buttonProps.type,
    ['is-plain']: buttonProps.plain,
    ['is-round']: buttonProps.round,
    ['is-circle']: buttonProps.circle,
  }
})
</script>

<style scoped></style>
