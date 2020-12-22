<template>
  <button type="button" class="btn btn-primary" @click="visibleAction"><span class="fa fa-plus"></span> Thêm công việc</button>
</template>

<script>
export default {
  methods: {
    visibleAction () {
      this.$store.dispatch('getVisible')
      this.$store.dispatch('addJobForm')
    }
  },
  computed: {
    visible () {
      return this.$store.getters.visible
    },
    add () {
      return this.$store.getters.add
    }
  }
}
</script>

<style scoped>
  .btn{
    position: absolute;
    left: 0;
  }
</style>