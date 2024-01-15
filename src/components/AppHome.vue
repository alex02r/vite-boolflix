<script>
import axios from "axios";
import { store } from "../store";
export default {
    data() {
        return {
            store,
            current: 0, 
            autoscrollFilm: null,
        }
    },
    created() {
        this.getHome();
        this.autoscroll(this.autoscrollFilm)
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
        },
        nextfigure(){
            if (this.current == store.popularFilms.length - 1) {
                this.current = 0;
            }else{
                this.current++;
            }
        },
        autoscroll(interval){
            interval = setInterval(()=>{
                this.nextfigure();
            },8000)
        },
    },
}
</script>
<template lang="">
    <div class="home">
        <h1>Film più visti</h1>
        <div class="slider">
            <img :src="`https://image.tmdb.org/t/p/w1280${store.popularFilms[current].backdrop_path}`" :alt="store.popularFilms[current].title">
            <h1>{{ store.popularFilms[current].title }}</h1>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/generals.scss';
    @use '../styles/movies.scss';
</style>