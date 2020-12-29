<!-- <template lang="">
  <el-icons :icon="icon" />
  <template #title>
    <span>
      {{ title }}
    </span>
  </template>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
})
</script>
<style lang="">

</style>

<!-- <script lang="ts">
// import { h, defineComponent, VNode } from 'vue'
// import ElIcons from '@/components/ElIcons/index.vue'

// export default defineComponent({
//   name: 'MenuItem',
//   functional: true,
//   props: {
//     icon: {
//       type: String,
//       default: ''
//     },
//     title: {
//       type: String,
//       default: ''
//     }
//   },
//   setup(props) {
//     // console.log('props', props)
//     const vnodes: VNode[] = []
//     if (props.icon) {
//       vnodes.push(h(ElIcons, { icon: props.icon }))
//     }
//     if (props.title) {
//       vnodes.push(h('span', {}, [props.title]))
//     }
//     return () => h('div', {}, vnodes)
//   }
// })
// </script>

// <style scoped>
// .sub-el-icon {
//   color: currentColor;
//   width: 1em;
//   height: 1em;
// }
// </style>
