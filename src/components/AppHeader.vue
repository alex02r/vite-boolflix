<script>
export default {
    
}
</script>
<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    logo
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
        background-color: $black;
    }
</style>