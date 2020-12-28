<template>
  <div style="padding: 0 15px" @click="toggleClick">
    <el-icon
      icon="s-fold"
      :size="20"
      class="hamburger"
      :class="{ 'is-active': isActive }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggleClick'],
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
})
</script>

<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  transition: all 0.2s;
  /* width: 20px;
  height: 20px; */
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
