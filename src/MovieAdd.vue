<template>


    <div id="add-movie">
        <h2>Add new movie</h2>
        <form v-on:submit="createMovie">
            <div class="form-group">
                <label for="add-name">Title</label>
                <input class="form-control" id="add-name" v-model="movie.title" required/>
            </div>
            <button type="submit" class="btn btn-primary">Create</button>
            <router-link to="/" class="btn btn-default">Cancel</router-link>
        </form>
    </div>

</template>

<script>
    import router from './routes.js';
    export default {
        data: function () {
            return {
                movie: {title: ''}
            }
        },
        methods: {
            createMovie: function () {
                var movie = this.movie;
                movies.push({
                    id: Date.now(),
                    title: movie.title
                });
                router.push('/');
            }
        }
    };
</script>

<style>

</style>