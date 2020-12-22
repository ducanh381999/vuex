<template>
  <table class="table table-bordered table-hover">
    <thead>
      <tr>
        <th scope="col">STT</th>
        <th scope="col">Tên</th>
        <th scope="col">Trạng Thái</th>
        <th scope="col">Hành Động</th>
      </tr>
    </thead>
    <!-- <tbody v-for="(item, index) in jobs" :key="index" :index="index">
      <tr>
        <th>{{ index+1 }}</th>
        <th>{{ item.name }}</th>
        <th>
          <a class="status-table false" v-if="item.status == 'false'" @click="changeStatusItem(item)">Ẩn</a>
          <a class="status-table true" v-else @click="changeStatusItem(item)">Kích hoạt</a>
        </th>
        <td>
          <button type="button" class="btn btn-warning" @click="visibleAction(item)"><span class="fa fa-pencil"></span> Sửa</button>
          <button type="button" class="btn btn-danger" @click="deleteItem(item)"><span class="fa fa-trash"></span> Xóa</button>
        </td>
      </tr>
    </tbody> -->
    <taskItem></taskItem>
  </table>
</template>

<script>
import taskItem from './taskItem.vue'
import {mapGetters} from 'vuex'
export default {
  components: { taskItem },
  computed: {
    jobs () {
      return this.$store.getters.jobs
    },
    visible () {
      return this.$store.getters.visible
    },
    add () {
      return this.$store.getters.add
    }
  },
  mounted () {
    var target = this.$cookie.get('jobs')
    if (target == null) {
      var jsonStr = JSON.stringify(this.$store.state.jobs)
      this.$cookie.set('jobs', jsonStr)
      var target = this.$cookie.get('jobs')
      var arr = JSON.parse(target)
      this.$store.state.jobs = arr
    }
    else {
      var target = this.$cookie.get('jobs')
      var arr = JSON.parse(target)
      this.$store.state.jobs = arr
    }
  },
  methods: {
    changeStatusItem (item) {
      this.$store.dispatch('changeStatus', item)
      var jsonStr = JSON.stringify(this.$store.state.jobs)
      this.$cookie.set('jobs', jsonStr)
      var target = this.$cookie.get('jobs')
      var arr = JSON.parse(target)
      this.$store.state.jobs = arr
    },
    visibleAction (item) {
      this.$store.dispatch('updateForm', item)
    },
    deleteItem (item) {
      this.$store.dispatch('deleteJob',item)
      var jsonStr = JSON.stringify(this.$store.state.jobs)
      this.$cookie.set('jobs', jsonStr)
      var target = this.$cookie.get('jobs')
      var arr = JSON.parse(target)
      this.$store.state.jobs = arr
    }
  }
}
</script>

<style scoped>
  table {
    position: absolute;
    top: 100px;
    left: 0;
  }
  .status-table{
    display: inline;
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
    text-decoration: none;
  }
  .true{
    background-color: #5cb85c;
  }
  .false{
    background-color: #d9534f;
  }
  a:hover{
    text-decoration: none;
  }
</style>