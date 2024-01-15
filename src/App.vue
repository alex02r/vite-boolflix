<script>
import AppHeader from './components/AppHeader.vue';
import AppHome from './components/AppHome.vue';
import AppSearched from './components/AppSearched.vue';
import AppFilms from "./components/AppFilms.vue";
import AppTv from './components/AppTv.vue';

import { store } from "./store";
import axios  from 'axios';
export default {
  components: {
    AppHeader,
    AppHome,
    AppSearched,
    AppFilms,
    AppTv
  },
  data() {
    return {
      store
    }
  },
  created() {
    this.getHome()
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
    },
    getHome(){
        store.popularFilms = [];
        store.popularSeries = [];
        axios.get(`${store.urlPopularFilms}${store.APIKey}&language=it-IT`).then(result =>{
            store.popularFilms = result.data.results;
        })
        axios.get(`${store.urlPopularTV}${store.APIKey}&language=it-IT`).then(res =>{
            store.popularSeries = res.data.results;
        })
    }
  },
}
</script>
<template lang="">
  <AppHeader @SearchTitle="search_title"/>
  <AppSearched/>
  <AppHome/>
</template>
<style lang="scss">
  @use './styles/generals.scss';
</style>