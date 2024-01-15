<script>
import axios from "axios";
import { store } from "../store";
export default {
    data() {
        return {
            store
        }
    },
    created() {
        this.getHome();
    },
    methods: {
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
    <div class="home">
        
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/generals.scss';
    @use '../styles/movies.scss'
</style>