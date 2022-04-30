import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      token: null
    }
  },
  
  plugins: [createPersistedState()],

  mutations: {
    setToken (state, token) {
      state.token = token
      state.isLoggedIn = !!(token)
    },
  },

  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
  },

  getters: {
    isLoggedIn: state => !!state.token
  }

})