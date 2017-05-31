<template>


    <div id="movie">
        <h2>{{ movie.title }}</h2>
        <br/>
        <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
        <router-link to="/">Back</router-link>
    </div>

</template>

<script>
    export default {
        data: function () {
            return {movie: findMovie(this.$route.params.movie_id)};
        }
    };
</script>

<style>

</style>