<template lang="">
  <div>
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <app-main />
  </div>
</template>
<script lang="ts">
import { onBeforeMount, onBeforeUnmount } from 'vue'
import { AppMain } from './components'
import { useGetStore } from '@/utils/hooks'
import { throttle } from '@/utils/utils'

const { body } = document
const WIDTH = 992 // refer to Bootstrap's responsive design

export default {
  components: {
    AppMain
  },
  setup() {
    const store = useGetStore()

    const device = store.getters.device

    const resizeHandler = throttle(() => {
      const _isMobile = body.getBoundingClientRect().width < WIDTH
      store.dispatch('app/toggleDevice', _isMobile ? 'mobile' : 'desktop')
      if (_isMobile) {
        store.dispatch('app/closeSideBar', { withoutAnimation: true })
      }
    }, 200)

    const handleClickOutside = () => {
      console.log('click')
      store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }

    onBeforeMount(() => {
      resizeHandler()
      window.addEventListener('resize', resizeHandler)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('resize', resizeHandler)
    })

    return {
      handleClickOutside,
      device
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
// 移动端菜单抽屉浮层
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
