<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="sidebar.opened" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="!sidebar.opened"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
        @open="test"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue'
import { useGetStore, useGetAllRouter } from '@/utils/hooks'
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
import variables from '@/styles/variables.scss'

export default defineComponent({
  components: { SidebarItem, Logo },
  setup() {
    const store = useGetStore()
    const { route, router } = useGetAllRouter()
    const sidebar = store.getters.sidebar
    watch(sidebar, () => {
      console.log('opened change', sidebar)
    })
    const showLogo: boolean = store.getters.sidebarLogo
    const routes = computed(() => router.options.routes)
    const activeMenu = computed(() => {
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    })

    const test = () => {
      console.log('test')
    }

    return {
      sidebar,
      showLogo,
      routes,
      activeMenu,
      variables,
      test
    }
  }
})
</script>
