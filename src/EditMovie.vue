<template>
    <div id="movie-edit">
        <h2>Edit movie</h2>
        <form v-on:submit="updateMovie">
            <div class="form-group">
                <label for="edit-name">Name</label>
                <input class="form-control" id="edit-name" v-model="movie.name" required/>
            </div>
            <div class="form-group">
                <label for="edit-description">Description</label>
                <textarea class="form-control" id="edit-description" rows="3" v-model="movie.description"></textarea>
            </div>
            <div class="form-group">
                <label for="edit-price">Price, <span class="glyphicon glyphicon-euro"></span></label>
                <input type="number" class="form-control" id="edit-price" v-model="movie.price"/>
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
            <router-link to="/" class="btn btn-default">Cancel</router-link>
        </form>
    </div>
</template>

<script>
    import router from './routes.js';
    export default {
        data: function () {
            console.log(this.$route.params.movie_id);
            return {movie: findMovie(this.$route.params.movie_id)};
        },
        methods: {
            updateMovie: function () {
                var movie = this.movie;
                movies[findMovieKey(movie.id)] = {
                    id: movie.id,
                    name: movie.name,
                    description: movie.description,
                    price: movie.price
                };
                router.push('/');
            }
        }
    };
</script>

<style>

</style>