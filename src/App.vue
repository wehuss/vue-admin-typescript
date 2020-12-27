<template>
  <router-view />
</template>

<script lang="ts">
import { useGetStore } from '@/utils/hooks'
import { useRoute } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const store1 = useGetStore()
    const store2 = useGetStore()
    store1.dispatch('app/toggleDevice', 'testValue')
    console.log(
      store1 === store2,
      store2.state.app.device,
      store1.getters.device
    )
  },
  mounted() {
    const router = useRoute()
    console.log(this, router)
  }
}
</script>
