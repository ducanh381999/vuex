<template>
  <div class="input-group form">
    <input class="form-control" placeholder="Nhập từ khóa .." :value="keyWord" @change="getInput">
    <span><button type="submit" class="btn btn-primary" @click="searchItems(keyWord)">Tìm</button></span>
    <div class="menu-wrap">
      <nav class="menu">
        <ul class="clearfix">
          <li>
              <a href="#">Sắp xếp <span><i class="fa fa-arrow-down"></i></span></a>
            <ul class="sub-menu">
              <li><a @click="sortAZ">Sắp xếp A-Z</a></li>
              <li><a @click="sortZA">Sắp xếp Z-A</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    keyWord () {
      return this.$store.getters.keyWord
    },
    jobs () {
      return this.$store.getters.jobs
    }
  },
  methods: {
    searchItems (keyWord) {
      if(keyWord === ''){
        var target = this.$cookie.get('jobs')
        var arr = JSON.parse(target)
        this.$store.state.jobs = arr
      }
      else this.$store.dispatch('search', keyWord)
    },
    getInput (e) {
      this.$store.commit('getInput', e.target.value)
    },
    sortAZ () {
      this.$store.dispatch('sortAZ')
    },
    sortZA () {
      this.$store.dispatch('sortZA')
    }
  }
}
</script>

<style scoped>
  .form {
    position: absolute;
    top:50px;
    left: 0;
  }
  .menu li {
    list-style: none;
  }
  .menu a {
    text-decoration: none;
    color: white;
  }
  .menu > ul > li {
    float:left;
    display:inline-block;
    position:relative;
    font-size:19px;
  }
  .menu > ul > li > a {
      padding: 6px 40px;
      background:#007bff;
      border-color: #007bff;
      border-radius: .25rem;
      display:inline-block;
      color:white;
  }
  .menu > ul > li:hover > a, .menu > ul > .current-item > a {
      background:#007bff;
      border-color: #007bff;
      border-radius: .25rem;
      width: 100%;
      color: white;
  }
  .menu li:hover .sub-menu {
    z-index:1;
    opacity:1;
  }
  .sub-menu {
    padding:5px 0px;
    position:absolute;
    top:100%;
    left:0px;
    width: 172.66px;
    z-index:-1;
    opacity:0;
    transition:opacity linear 0.15s;
    box-shadow:0px 2px 3px rgba(0,0,0,0.2);
    background:#007bff;
    border-color: #007bff;
    border-radius: .25rem;
  }
  .sub-menu > ul > li > a{
    color: white;
  }
  .sub-menu li a:hover, .sub-menu .current-item a {
    border-color: #007bff;
    border-radius: .25rem;
    color: white;
  }

</style>