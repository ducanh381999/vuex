<template>
  <div id="app">
    <div class="container">
      <h3>Quản lý công việc</h3>
      <hr>
      <div class="row">
        <div :class="[visible ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4': '']">
          <add-form></add-form>
        </div>
        <div :class="[visible ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12']">
          <add-job></add-job>
          <search></search>
          <Table></Table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddForm from './components/addForm.vue'
import AddJob from './components/addJob.vue'
import search from './components/search.vue'
import Table from './components/table.vue'
export default {
  components: { search, AddForm, AddJob, Table },
  name: 'App',
  computed: {
    visible () {
      return this.$store.getters.visible
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
