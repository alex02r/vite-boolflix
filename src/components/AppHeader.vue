<script>
import { store } from "../store";
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        getHome(){
            store.searched = false;
            store.showFilm = true;
            store.showSeries = true;
        },
        getFilms(){
            store.showFilm = true;
            store.showSeries = false;
        },
        getSeries(){
            store.showSeries = true;
            store.showFilm = false;
        }
    },
}
</script>
<template lang="">
    <header>
        <div class="container-fluid">
            <div class="row justify-content-between">
                <div class="col-8">
                    <div class="d-flex h-100 gap-3">
                        <div class="logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo netflix">
                        </div>
                        <ul class="list-header">
                            <li @click="getHome()">Home</li>
                            <li @click="getFilms()">Film</li>
                            <li @click="getSeries()">Serie TV</li>
                            <li>La mia lista</li>
                        </ul>
                    </div>
                </div>
                <div class="col-2">
                    <div class="input-group input-group-sm d-flex align-items-center h-100">
                        <!-- Searchbar with emit on App.vue -->
                        <input type="text" class="form-control" placeholder="Film, SerieTv" v-model="store.searchValue" @keyup.enter="$emit('SearchTitle')">
                        <button class="btn btn-secondary" @click="$emit('SearchTitle')">Cerca</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/generals.scss';
    header{
        padding: 5px 0;
        background-color: $black;
        .logo{
            display: flex;
            align-items: center;
            height: 100%;
            width: 80px;
        }
        .list-header{
            display: flex;
            align-items: center;
            gap: 10px;
            height: 100%;
            list-style: none;
            color: $white;
            cursor: pointer;
            li:hover, li:active{
                color: rgb(220, 53, 69);
            }
        }
        
    }
</style>