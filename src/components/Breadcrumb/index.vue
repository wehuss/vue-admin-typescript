<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in data.levelList"
        :key="item.path"
      >
        <span
          v-if="
            item.redirect === 'noRedirect' || index == data.levelList.length - 1
          "
          class="no-redirect"
        >{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import { reactive, watchEffect, onBeforeMount, defineComponent } from 'vue'
import { useGetAllRouter } from '@/utils/hooks'
import { RouteLocationMatched } from 'vue-router'

interface Data {
  levelList: RouteLocationMatched[];
}

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const data = reactive<Data>({
      levelList: []
    })
    const { route, router } = useGetAllRouter()
    const { compile } = require('path-to-regexp')

    const isIndex = (first: RouteLocationMatched) => {
      const name = first && first.name
      if (!name) {
        return false
      }
      return (
        (name as string).trim().toLocaleLowerCase() ===
        'index'.toLocaleLowerCase()
      )
    }

    const getBreadcrumb = () => {
      let matched = route.matched.filter(
        (item) => item.meta && item.meta.title
      )
      // console.log('route.matched', route.matched)
      const first = matched[0]
      // 判断当前是否为首页
      if (!isIndex(first)) {
        // 如果不是则将路由匹配数组开头插入首页信息，将面包屑导航由 page 变为 index/page
        const fakeRouteLocationMatched = {
          ...first,
          path: '/index',
          meta: { title: '首页' }
        }

        matched = [fakeRouteLocationMatched, ...matched]
      }
      data.levelList = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      )
      // console.log(data.levelList)
    }
    // 监听路由
    watchEffect(() => {
      if (route) {
        getBreadcrumb()
      }
    })
    onBeforeMount(() => {
      getBreadcrumb()
    })

    const pathCompile = (path: string) => {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      // Turn a path string such as `/user/:name` into a regular expression
      const { params } = route
      var toPath = compile(path)
      return toPath(params)
    }

    const handleLink = (item: RouteLocationMatched) => {
      const { redirect, path } = item
      if (redirect) {
        router.push(redirect as string)
        return
      }
      router.push(pathCompile(path))
    }

    return {
      data,
      handleLink
    }
  }
})
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
