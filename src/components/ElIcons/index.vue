<template>
  <i :class="`el-icon-${icon}`" :style="{fontSize:`${size}px`}" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'

// 简单封装element-icon
export default defineComponent({
  name: 'ElIcons',
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 18,
      required: false
    }
  }
})
</script>
