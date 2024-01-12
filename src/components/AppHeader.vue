<script>
export default {
    
}
</script>
<template lang="">
    <header>
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-2">
                    <div class="logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo netflix">
                    </div>
                </div>
                <div class="col-6">
                    <div class="input-group m-3">
                        <input type="text" class="form-control" placeholder="Film, SerieTv">
                        <button class="btn btn-secondary">Cerca</button>
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
        padding: 20px 0;
        background-color: $black;
        .logo{
            display: flex;
            align-items: center;
            height: 100%;
        }
    }
</style>