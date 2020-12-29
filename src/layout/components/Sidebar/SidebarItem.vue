<template>
  <div v-if="!item?.hidden">
    <!-- 显示条件:如果没有子路由||只有一个子路由||设置alwaysShow为true -->
    <template
      v-if="
        hasOneShowingChild(item?.children, item) &&
          (!data.onlyOneChild.children || data.onlyOneChild.noShowingChildren) &&
          !item.alwaysShow
      "
    >
      <app-link
        v-if="data.onlyOneChild.meta"
        :to="resolvePath(data.onlyOneChild.path)"
      >
        <el-menu-item
          :index="resolvePath(data.onlyOneChild.path)"
          :class="{ 'submenu-title-noDropdown': !isNest }"
        >
          <item
            :icon="
              data.onlyOneChild.meta.icon ||
                (item.meta && item.meta.icon)
            "
            :title="data.onlyOneChild.meta.title"
          />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu
      v-else
      ref="menuRef"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template #title>
        <item
          v-if="item.meta"
          :icon="item.meta && item.meta.icon"
          :title="item.meta.title"
        />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onMounted,
  shallowRef,
  onBeforeMount
} from 'vue'
import path from 'path'
import { isExternal } from '@/utils/validate'
import { useGetStore } from '@/utils/hooks'
import Item from './Item.vue'
import AppLink from './Link.vue'
import { RouteRecordRaw } from 'vue-router'
import { SubMenuProvider } from 'element-plus/lib/el-menu/src/menu'
// import FixiOSBug from './FixiOSBug'

interface Data {
  onlyOneChild: null | RouteRecordRaw;
}

export default defineComponent({
  name: 'SidebarItem',
  components: { Item, AppLink },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const data = reactive<Data>({
      onlyOneChild: null
    })
    const routeItem = reactive<RouteRecordRaw>({
      ...(props.item as RouteRecordRaw)
    })
    const menuRef = shallowRef<null | SubMenuProvider>(null)
    const device: string = useGetStore().getters.device

    onBeforeMount(() => {
      if (!routeItem?.children) {
        routeItem.children = []
      }
    })

    onMounted(() => {
      if (menuRef.value) {
        const handleMouseleave = menuRef.value.handleMouseleave
        menuRef.value.handleMouseleave = (e) => {
          if (device === 'mobile') {
            return
          }
          handleMouseleave && handleMouseleave(e)
        }
      }
    })

    const hasOneShowingChild = (
      children: RouteRecordRaw[] = [],
      parent: RouteRecordRaw
    ) => {
      // console.log('children', children, 'parent', parent)
      // 过滤掉所有hidden为true的子路由
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false
        }
        // Temp set(will be used if only has one showing child)
        // 暂时将onlyOneChild设置为最后一个符合条件的子路由
        data.onlyOneChild = item
        return true
      })

      // When there is only one child router, the child router is displayed by default
      // 如果只有一个子路由，则使用它
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      // 如果没有子元素则显示父元素
      if (showingChildren.length === 0) {
        data.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    }

    const resolvePath = (routePath: string) => {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(props.basePath)) {
        return props.basePath
      }
      return path.resolve(props.basePath, routePath)
    }

    return {
      routeItem,
      data,
      hasOneShowingChild,
      resolvePath
    }
  }
})
</script>
