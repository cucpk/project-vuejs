import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import home from './module/home'
import auth from './module/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    auth,

  },
  plugins: [createPersistedState({paths: ['auth']})],
})

export default store