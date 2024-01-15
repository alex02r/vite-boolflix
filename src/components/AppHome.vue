<script>
import axios from "axios";
import { store } from "../store";
export default {
    data() {
        return {
            store,
            currentFilm: 0,
            currentSeries: 0, 
            autoscroll: null,
        }
    },
    created() {
        this.getHome();
        this.setAutoscroll()
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
        nextfilm(){
            if (this.currentFilm == store.popularFilms.length - 1) {
                this.currentFilm = 0;
            }else{
                this.currentFilm++;
            }
        },
        nextseries(){
            if (this.currentSeries == store.popularSeries.length - 1) {
                this.currentSeries = 0;
            }else{
                this.currentSeries++;
            }
        },
        setAutoscroll(){
            this.autoscroll = setInterval(()=>{
                this.nextfilm();
                this.nextseries();
            },8000)
        },
    },
}
</script>
<template lang="">
    <h1>Film più visti</h1>
    <div class="home-content">
        <div class="slider">
            <img :src="`https://image.tmdb.org/t/p/w1280${store.popularFilms[currentFilm].backdrop_path}`" :alt="store.popularFilms[currentFilm].title">
            <h1>{{ store.popularFilms[currentFilm].title }}</h1>
        </div>
    </div>
    <h1>Serie Tv più viste</h1>
    <div class="home-content">
        <div class="slider">
            <img :src="`https://image.tmdb.org/t/p/w1280${store.popularSeries[currentSeries].backdrop_path}`" :alt="store.popularSeries[currentSeries].name">
            <h1>{{ store.popularSeries[currentSeries].name }}</h1>
        </div>
    </div>

</template>
<style lang="scss" scoped>
    @use '../styles/generals.scss';
    @use '../styles/movies.scss';
    .home-content{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .slider{
        
        position: relative;
        width: 60%;
        h1{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>