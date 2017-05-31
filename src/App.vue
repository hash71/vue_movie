<template>
    <div id="app" class="container">
        <!--<product-list></product-list>-->
        <!--<product></product>-->
        <!--<product-edit></product-edit>-->
        <!--<product-delete></product-delete>-->
        <!--<product-add></product-add>-->
        <router-view></router-view>
    </div>
</template>

<script>

    import MovieList from './MovieList.vue';
    import Movie from './Movie.vue';
    import EditMovie from './EditMovie.vue';
    import MovieDelete from './MovieDelete.vue';
    import MovieAdd from './MovieAdd.vue';
    import EditMovieInfo from './EditMovieInfo.vue';

    export default {
        name: 'app',
        components: {MovieList, EditMovieInfo, EditMovie, Movie, MovieDelete, MovieAdd},
        data () {
            return {};
        }
    }
</script>

<style>

</style>
