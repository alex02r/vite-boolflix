<script>
import { store } from "../store";
export default {
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
        },
        //funcion for get vote in stars
        getStarVote(vote){
            let stars = []
            let n = Math.floor(vote) / 2;
            n = Math.round(n);
            for (let i = 0; i < n; i++) {
                stars.push(1)
            }
            return stars
        },
        getStarEmpty(vote){
            let empty = [];
            let n = Math.floor(vote) / 2;
            n = Math.round(n)
            let length = 5 - n;
            for (let i = 0; i < length; i++) {
                empty.push(0)
            }
            return empty
        }
    },
}
</script>
<template lang="">
    <div class="row my-3">
        <div class="col-12">
            <h1>Film</h1>
        </div>
        <div class="col-4 col-md-3 col-lg-2" v-for="(film, index) in store.arrayFilms" :key="index">
            <div class="thumb">
                <img :src="`http://image.tmdb.org/t/p/w500${film.poster_path}`" :alt="film.title">
            </div>
            <ul class="list-unstyled">
                <li>{{ film.title }}</li>
                <li>{{ film.original_title }}</li>
                <li>
                    <!-- {{ film.original_language }} -->
                    Lingua originale: <img class="flag" :src="getFlag(film.original_language)" :alt="film.original_language">
                </li>
                <li>
                    <!-- {{ film.vote_average }} -->
                    <div class="star-container">
                        <div class="star full" v-for="(star, index) in getStarVote(film.vote_average)" :key="index">
                            &#9733;
                        </div>
                        <div class="star" v-for="(empty, index) in getStarEmpty(film.vote_average)" :key="index">
                            &#9734;
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/generals.scss';
    .star-container{
        display: flex;
    }
</style>