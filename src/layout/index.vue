<template>
  <div :class="classObj" class="app-wrapper">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <div class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>
<script lang="ts">
import { onBeforeMount, onBeforeUnmount } from 'vue'
import { AppMain, Navbar } from './components'
import { useGetStore } from '@/utils/hooks'
import { throttle } from '@/utils/utils'

const { body } = document
const WIDTH = 992 // refer to Bootstrap's responsive design

export default {
  components: {
    AppMain,
    Navbar
  },
  setup() {
    const store = useGetStore()

    const device = store.state.app.device // 当前视窗尺寸为桌面端还是移动端
    const sidebar = store.state.app.sidebar // 侧边栏设置
    const fixedHeader = store.state.settings.fixedHeader // 是否固定头部
    const classObj = {
      hideSidebar: !sidebar.opened,
      openSidebar: sidebar.opened,
      withoutAnimation: sidebar.withoutAnimation,
      mobile: device === 'mobile'
    }

    const resizeHandler = throttle(() => {
      const _isMobile = body.getBoundingClientRect().width < WIDTH
      store.dispatch('app/toggleDevice', _isMobile ? 'mobile' : 'desktop')
      if (_isMobile) {
        store.dispatch('app/closeSideBar', { withoutAnimation: true })
      }
    }, 200)

    const handleClickOutside = () => {
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
      device,
      sidebar,
      fixedHeader,
      classObj,
      handleClickOutside
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
