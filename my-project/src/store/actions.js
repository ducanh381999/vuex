export default {
  getVisible ({commit}, visible) {
    commit('getVisible', visible)
  },
  closeVisible ({commit}, visible) {
    commit('closeVisible', visible)
  },
  addJobForm ({commit}, add) {
    commit('addJobForm', add)
  },
  updateJobForm ({commit}, item) {
    commit('updateJobForm', item)
  },
  addJob ({commit}, name, status) {
    commit('addJob', name, status)
  },
  getName ({commit}, name) {
    commit('getName', name)
  },
  deleteJob ({commit}, item) {
    commit('deleteJob', item)
  },
  changeStatus ({commit}, item) {
    commit('changeStatus', item)
  },
  search ({commit}, keyWord) {
    commit('search', keyWord)
  },
  getInput ({commit}, keyWord) {
    commit('getInput', keyWord)
  },
  sortAZ ({commit}, jobs) {
    commit('sortAZ', jobs)
  },
  sortZA ({commit}, jobs) {
    commit('sortZA', jobs)
  },
  getStatus ({commit}, status) {
    commit('getStatus', status)
  },
  updateForm ({commit}, visible, add, item) {
    commit('updateForm', visible, add, item)
  },
  updateJob ({commit}, name, status) {
    commit('updateJob', name, status)
  }
}