<script>
import AppHeader from './components/AppHeader.vue';

import { store } from "./store";
import axios  from 'axios';
export default {
  components: {
    AppHeader
  },
  data() {
    return {
      store
    }
  },
  methods: {
    //function for request list of film at API
    search_title(){
      store.arrayFilms = []
      axios.get(`${store.urlFilms}${store.APIKey}&query=${store.searchValue}&language=it-IT`).then( response =>{
        /* console.log(response.data.results); */
        store.arrayFilms = [...response.data.results];
        console.log(store.arrayFilms);
      })
    }
  },
}
</script>
<template lang="">
  <AppHeader @SearchTitle="search_title"/>
</template>
<style lang="scss">
  @use './styles/generals.scss';
</style>