<template>
    <div id="movie-delete">
        <h2>Delete movie <em>{{ movie.title }}</em></h2>
        <form v-on:submit="deleteMovie">
            <p>Are You Sure?</p>
            <button type="submit" class="btn btn-danger">Delete</button>
            <router-link to="/" class="btn btn-default">Cancel</router-link>
        </form>
    </div>
</template>

<script>
    import router from './routes.js';
    export default {
        data: function () {
            return {movie: findMovie(this.$route.params.movie_id)};
        },
        methods: {
            deleteMovie: function () {
                movies.splice(findKey(this.$route.params.movie_id), 1);
                router.push('/');
            }
        }
    };
</script>

<style>

</style>