<script lang="ts">
import { h, defineComponent, VNode } from 'vue'
import ElIcons from '@/components/ElIcons/index.vue'

export default defineComponent({
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    // console.log('props', props)
    const vnodes: VNode[] = []
    if (props.icon) {
      vnodes.push(h(ElIcons, { icon: props.icon }))
    }
    if (props.title) {
      vnodes.push(h('span', {}, [props.title]))
    }
    return () => h('div', {}, vnodes)
  }
  // render(props:any) {
  //   console.log('props', props)
  //   return h('div', {}, ['testValue'])
  // }
})
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
