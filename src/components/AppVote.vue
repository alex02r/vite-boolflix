<script>
import { store } from "../store";
export default {
}
</script>
<template lang="">
    <div class="star-container">
        <div class="star">
            &#9733;
        </div>
        <div class="star">
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
        }
    }
</style>