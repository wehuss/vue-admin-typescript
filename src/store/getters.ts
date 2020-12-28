// const _getters = function(modulesName: string, key: string) {
//   return (state: any) => state[modulesName][key]
// }

const getters = {
  sidebar: (state: Vuex.Vuex) => state.app.sidebar,
  device: (state: Vuex.Vuex) => state.app.device,
  fixedHeader: (state: Vuex.Vuex) => state.settings.fixedHeader,
  sidebarLogo: (state: Vuex.Vuex) => state.settings.sidebarLogo
//   sidebar: _getters('app', 'sidebar'),
//   device: _getters('app', 'device')
}
export default getters
