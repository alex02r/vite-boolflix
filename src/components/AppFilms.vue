<script>
import AppVote from "./AppVote.vue";
import { store } from "../store";
export default {
    components:{
        AppVote
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        //function for get flag image of language
        getFlag(lang){
            let src = ''
            if (lang == 'en') {
                src = `https://flagsapi.com/GB/flat/64.png`
                return src
            }
            src = `https://flagsapi.com/${lang.toUpperCase()}/flat/64.png`
            return src
        }
    },
}
</script>
<template lang="">
    <div class="row my-3 g-2">
        <div class="col-12">
            <h1>Film</h1>
        </div>
        <div class="col-4 col-md-3 col-lg-2" v-for="(film, index) in store.arrayFilms" :key="index">
            <div class="info">
                <div class="thumb">
                    <img :src="`http://image.tmdb.org/t/p/w342${film.poster_path}`" :alt="film.title">
                </div>
                <ul class="list-unstyled">
                    <li>{{ film.title }}</li>
                    <li>{{ film.original_title }}</li>
                    <li>
                        Lingua originale: <img class="flag" :src="getFlag(film.original_language)" :alt="film.original_language">
                    </li>
                    <li>
                        <AppVote :vote_value="film.vote_average"/>
                    </li>
                    <li>
                        {{ film.overview }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/generals.scss';
    @use '../styles/movies.scss';
</style>