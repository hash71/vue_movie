<template>
    <div id="movie-edit">
        <h2>Edit movie</h2>
        <form v-on:submit="updateMovie">
            <div class="form-group">
                <label for="edit-name">Title</label>
                <input class="form-control" id="edit-name" v-model="movie.title" required/>
            </div>
            <button type="submit" class="btn btn-primary">Update</button>
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
            updateMovie: function () {
                var movie = this.movie;
                movies[findKey(movie.id)] = {
                    id: movie.id,
                    title: movie.title
                };
                router.push('/');
            }
        }
    };
</script>

<style>

</style>