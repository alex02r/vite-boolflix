<script>
import { store } from "../store";
export default {
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <div class="row">
        <div class="col-4 col-md-3 col-lg-2" v-for="(film, index) in store.arrayFilms" :key="index">
            <h3>{{ film.title}}</h3>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/generals.scss';
</style>