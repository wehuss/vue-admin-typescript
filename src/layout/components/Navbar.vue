<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"> -->
          <img src="https://bkimg.cdn.bcebos.com/pic/8ad4b31c8701a18b40a118a5902f07082938fe96?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UyNzI=,g_7,xp_5,yp_5" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <!-- slot="dropdown" -> template #dropdown  -->
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item> Home </el-dropdown-item>
            </router-link>
            <a
              target="_blank"
              href="https://github.com/PanJiaChen/vue-admin-template/"
            >
              <el-dropdown-item>Github</el-dropdown-item>
            </a>
            <a
              target="_blank"
              href="https://panjiachen.github.io/vue-element-admin-site/#/"
            >
              <el-dropdown-item>Docs</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout">
              <span style="display: block">Log Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang='ts'>
import { useGetStore } from '@/utils/hooks'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import Hamburger from '@/components/Hamburger/index.vue'

export default {
  components: {
    Breadcrumb,
    Hamburger
    // Hamburger
  },
  setup() {
    const store = useGetStore()
    const sidebar = store.getters.sidebar

    const logout = () => {
      console.log('logout')
    }

    const toggleSideBar = () => {
      store.dispatch('app/toggleSideBar')
    }

    return {
      sidebar,
      logout,
      toggleSideBar
    }
  }
  // computed: {
  //   ...mapGetters([
  //     'sidebar',
  //     'avatar'
  //   ])
  // },
  // methods: {
  //   toggleSideBar() {
  //     this.$store.dispatch('app/toggleSideBar')
  //   },
  //   async logout() {
  //     await this.$store.dispatch('user/logout')
  //     this.$router.push(`/login?redirect=${this.$route.fullPath}`)
  //   }
  // }
}
</script>

<style lang="scss">
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;
      height: 50px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
