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
    methods: {
        getImage(img){
            let string = '';
            if(img == null){
                string = '/src/assets/img/no-image.jpg';
                return string
            }
            string = `http://image.tmdb.org/t/p/w500${img}`;
            return string;
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
                    <img :src="getImage(series.poster_path)" :alt="series.name">
                </div>
                <div class="content">
                    <div class="title">
                        <h4>{{ series.name }}</h4>
                        <span class="subtitle">{{ series.original_name }}</span>
                        <AppVote :vote_value="series.vote_average"/>
                        
                    </div>
                    <div class="description">
                        <h6>Descrizione:</h6>
                        <p>
                            {{ series.overview }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/generals.scss';
    @use '../styles/movies.scss';
</style>