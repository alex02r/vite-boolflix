<script>
import { store } from "../store";
export default {
    props:{
        vote_value: Number
    },
    data() {
        return {
            store
        }
    },
    methods: {
        
        //funcion for get full star
        getStarVote(num){
            let stars = []
            let n = Math.floor(num) / 2;
            n = Math.round(n);
            for (let i = 0; i < n; i++) {
                stars.push(1)
            }
            return stars
        },
        //function for get empty star
        getStarEmpty(num){
            let empty = [];
            let n = Math.floor(num) / 2;
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
    <div class="star-container">
        <div class="star" v-for="(star, index) in getStarVote(vote_value)" :key="index">
            &#9733;
        </div>
        <div class="star" v-for="(empty, index) in getStarEmpty(vote_value)" :key="index">
            &#9734;
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';
    .star-container{
        display: flex;
        .star{
            font-size: 20px;
            color: goldenrod;
        }
    }
</style>