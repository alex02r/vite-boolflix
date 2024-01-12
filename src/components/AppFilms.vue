<script>
import { store } from "../store";
export default {
    data() {
        return {
            store
        }
    },
    methods: {
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
    <div class="row">
        <div class="col-4 col-md-3 col-lg-2" v-for="(film, index) in store.arrayFilms" :key="index">
            <ul class="list-unstyled">
                <li>{{ film.title }}</li>
                <li>{{ film.original_title }}</li>
                <li>
                    <!-- {{ film.original_language }} -->
                    Lingua originale: <img class="flag" :src="getFlag(film.original_language)" :alt="film.original_language">
                </li>
                <li>{{ film.vote_average }}</li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/generals.scss';
    .flag{
        width: 20px;
    }
</style>