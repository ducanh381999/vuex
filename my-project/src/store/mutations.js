export default {
  getVisible (state, visible) {
    state.visible = !state.visible
  },
  closeVisible (state, visible) {
    state.visible = false
  },
  addJobForm (state, add) {
    state.add = 'true'
  },
  updateJobForm (state, item) {
    state.newJob = item
    console.log(item)
  },
  addJob (state, name, status) {
    state.newJob = {
      name: state.name,
      status: state.status
    }
    var newJob = JSON.stringify(state.newJob)
    var jobs = JSON.stringify(state.jobs)
    var count = jobs.indexOf(newJob)
    console.log(count)
    if (count > -1) {
      console.log('Da co trong db')
    } else state.jobs.push(state.newJob)
  },
  getName (state, name) {
    state.name = name
  },
  getStatus (state, status) {
    state.status = status
  },
  deleteJob (state, item) {
    var jobs = state.jobs
    jobs.splice(jobs.indexOf(item), 1)
  },
  changeStatus (state, item) {
    var count = state.jobs.indexOf(item)
    if (count > -1) {
      if (state.jobs[count].status === 'true') state.jobs[count].status = 'false'
      else state.jobs[count].status = 'true'
    }
  },
  search (state, keyWord) {
    state.jobs = state.jobs.filter((job) => {
      return job.name.match(keyWord)
    })
  },
  getInput (state, keyWord) {
    state.keyWord = keyWord
  },
  sortAZ (state, jobs) {
    function compare(a, b) {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    }
    
    return state.jobs.sort(compare);
  },
  sortZA (state, jobs) {
    function compare(a,b) {
      if(a.name < b.name)
        return 1;
      if (a.name > b.name) {
        return -1;
      return 0;
      }
    }

    return state.jobs.sort(compare)
  },
  updateForm (state, item) {
    state.visible = !state.visible
    state.add = 'false'
    state.newJob = item
  },
  updateJob (state, name, status) {
    var count = state.jobs.indexOf(state.newJob)
    if (count > -1) {
      state.jobs[count] = {
        name: state.name,
        status: state.status
      }
    }
  }
}