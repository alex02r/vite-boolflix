<script>
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
        this.setAutoscroll()
    },
    methods: {
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
        }
    }
}
</script>
<template lang="">
    <div class="container-fluid" v-if="!store.searched">
        <div class="text-white" v-if="store.showFilm">
            <h1>Film più visti</h1>
            <div class="home-content">
                <div class="slider">
                    <img :src="`https://image.tmdb.org/t/p/w1280${store.popularFilms[currentFilm].backdrop_path}`" :alt="store.popularFilms[currentFilm].title">
                    <div class="img-info">
                        <h1>{{ store.popularFilms[currentFilm].title }}</h1>
                        <p>
                            {{ store.popularFilms[currentSeries].overview }}
                        </p>
                    </div>
                </div>
            </div>
            <h5 class="text-white">Tutti i film più visti</h5>
            <div class="lists">
                <img v-for="(film, index) in store.popularFilms" :key="index" :src="`https://image.tmdb.org/t/p/w500${film.poster_path}`" :alt="film.title">
            </div>
        </div>
        <div class="text-white" v-if="store.showSeries">
            <h1>Serie Tv più viste</h1>
            <div class="home-content">
                <div class="slider">
                    <img :src="`https://image.tmdb.org/t/p/w1280${store.popularSeries[currentSeries].backdrop_path}`" :alt="store.popularSeries[currentSeries].name">
                    <div class="img-info">
                        <h1>{{ store.popularSeries[currentSeries].name }}</h1>
                        <p>
                            {{ store.popularSeries[currentSeries].overview }}
                        </p>
                    </div>
                </div>
            </div>
            <h5 class="text-white">Tutte le serieTV più visti</h5>
            <div class="lists">
                <img v-for="(series, index) in store.popularSeries" :key="index" :src="`https://image.tmdb.org/t/p/w500${series.poster_path}`" :alt="series.name">
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/generals.scss';
    .home-content{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .slider{
        position: relative;
        width: 60%;
        .img-info{
            width: 50%;
            position: absolute;
            top: 70%;
            left: 10px;
            transform: translateY(-70%);
            h1{
                text-shadow: 0 0 10px #FFFFFF;
            }
            p{
                text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3);
            }
        }
    }
    .lists{
        margin: 10px;
        display: flex;
        overflow-x: auto;
        img{
            width: 200px;
        }
    }
</style>