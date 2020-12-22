<template>
  <div class="panel panel-warning" v-if="visible">
    <div class="panel-heading">
      <h3 class="panel-title" v-if="add == 'true'"> Thêm công việc
        <a class="exit-form text-right"  @click="closeForm"><span class="fa fa-times-circle"></span></a>
      </h3>
      <h3 class="panel-title" v-else> Sửa công việc
        <a class="exit-form text-right"  @click="closeForm"><span class="fa fa-times-circle"></span></a>
      </h3>
    </div>
    <div class="panel-body">
      <form>
        <div class="form-group">
          <label>Tên :</label>
          <input type="text" class="form-control" :value="name" @change="getName">
        </div>
        <label>Trạng Thái :</label>
        <select class="form-control" :value="status" @change="getStatus">
          <option value="true" selected>Kích hoạt</option>
          <option value="false">Ẩn</option>
        </select>
        <br>
        <div class="text-center">
          <button type="submit" class="btn btn-warning" v-if="add == 'true'" @click="addJob(name, status)">Thêm</button>
          <button type="submit" class="btn btn-warning" v-else @click="updateJob(name, status)">Sửa</button>
          <button type="button" class="btn btn-danger" @click="closeForm">Hủy bỏ</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    visible () {
      return this.$store.getters.visible
    },
    add () {
      return this.$store.getters.add
    },
    newJob () {
      return this.$store.getters.newJob
    },
    name () {
      return this.$store.getters.name
    },
    status () {
      return this.$store.getters.status
    }
  },
  methods: {
    closeForm () {
      this.$store.dispatch('closeVisible')
    },
    addJob (name, status) {
      this.$store.dispatch('addJob')
      var jsonStr = JSON.stringify(this.$store.state.jobs)
      this.$cookie.set('jobs', jsonStr)
      var target = this.$cookie.get('jobs')
      var arr = JSON.parse(target)
      this.$store.state.jobs = arr
    },
    getName (e) {
      this.$store.dispatch('getName', e.target.value)
    },
    getStatus (e) {
      this.$store.dispatch('getStatus', e.target.value)
    },
    updateJob (name, status) {
      this.$store.dispatch('updateJob')
      var jsonStr = JSON.stringify(this.$store.state.jobs)
      this.$cookie.set('jobs', jsonStr)
      var target = this.$cookie.get('jobs')
      var arr = JSON.parse(target)
      this.$store.state.jobs = arr
    }
  }
}
</script>

<style>
  a:hover {
    cursor: pointer;
  }
  .panel-heading{
    color: #8a6d3b;
    background-color: #fcf8e3;
    border-color: #faebcc;
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
</style>