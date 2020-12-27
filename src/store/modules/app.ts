import Cookies from 'js-cookie'
import { Commit, Module } from 'vuex'

const state: Vuex.App = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? Boolean(Cookies.get('sidebarStatus')) : true,
    withoutAnimation: false
  },
  device: 'desktop'
}

const mutations = {
  TOGGLE_SIDEBAR: (state: Vuex.App) => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', '1')
    } else {
      Cookies.set('sidebarStatus', '0')
    }
  },
  CLOSE_SIDEBAR: (state: Vuex.App, withoutAnimation: boolean) => {
    Cookies.set('sidebarStatus', '0')
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state: Vuex.App, device: string) => {
    state.device = device
  }
}

const actions = {
  toggleSideBar({ commit }: { commit: Commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }: { commit: Commit }, { withoutAnimation }: { withoutAnimation: boolean }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }: { commit: Commit }, device: string) {
    commit('TOGGLE_DEVICE', device)
  }
}

const App:Module<Vuex.App, Vuex.Vuex> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default App
