<script>
import AppVote from "./AppVote.vue";
import { store } from "../store";
export default {
    components:{
        AppVote
    },
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <div class="row g-2">
        <div class="col-12"><h1>Serie TV</h1></div>
        <div class="col-4 col-md-3 col-lg-2" v-for="(series, index) in store.arrayTv" :key="index">
            <div class="info">
                <div class="thumb">
                    <img :src="`http://image.tmdb.org/t/p/w500${series.poster_path}`" :alt="series.name">
                </div>
                <ul class="list-unstyled">
                    <li>{{ series.name }}</li>
                    <li>{{ series.original_name }}</li>
                    <li>
                        Lingua originale: <img class="flag" :src="`https://flagsapi.com/${series.origin_country}/flat/64.png`" :alt="series.origin_country">
                    </li>
                    <li>
                        <AppVote :vote_value="series.vote_average"/>
                    </li>
                    <li>
                        {{ series.overview }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/generals.scss';
    @use '../styles/movies.scss';
</style>