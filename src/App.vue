<script>
import AppHeader from './components/AppHeader.vue';
import AppHome from './components/AppHome.vue';
import AppFilms from "./components/AppFilms.vue";
import AppTv from './components/AppTv.vue';

import { store } from "./store";
import axios  from 'axios';
export default {
  components: {
    AppHeader,
    AppHome,
    AppFilms,
    AppTv
  },
  data() {
    return {
      store
    }
  },
  methods: {
    //function for request list of film and tv series at API
    search_title(){
      if (store.searchValue != '') {
        store.searched = true;
      }else{
        store.searched = false;
      }
      //film list
      store.arrayFilms = []
      axios.get(`${store.urlFilms}${store.APIKey}&query=${store.searchValue}&language=it-IT`).then( response =>{
        /* console.log(response.data.results); */
        store.arrayFilms = response.data.results;
      })

      //serie tv list
      store.arrayTv = []
      axios.get(`${store.urlTv}${store.APIKey}&language=it-IT&query=${store.searchValue}`).then( data =>{
        /* console.log(response.data.results); */
        store.arrayTv = data.data.results;
      })
    }
  },
}
</script>
<template lang="">
  <AppHeader @SearchTitle="search_title"/>
  <AppHome v-if="!store.searched"/>
  <div class="container" v-else>
    <AppFilms/>
    <AppTv />
  </div>
  
</template>
<style lang="scss">
  @use './styles/generals.scss';
</style>