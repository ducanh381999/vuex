import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default new Vuex.Store({
  state: {
    visible: false,
    add: '',
    name: '',
    status: '',
    jobs: [],
    keyWord: '',
    newJob: { name: '', status: ''}
  },
  getters,
  mutations,
  actions
})