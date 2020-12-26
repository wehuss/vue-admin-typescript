<template>
  <router-view />
</template>

<script lang="ts">
import { useGetStore } from '@/utils/hooks'

export default {
  name: 'App',
  setup() {
    // console.log(useGetStore())
    // console.log(useGetStore())
    const store1 = useGetStore()
    const store2 = useGetStore()
    store1.dispatch('app/toggleDevice', 'testValue')
    console.log(store1 === store2, store2.state.app.device)
  }
}
</script>
