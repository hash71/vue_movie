import VueRouter from 'vue-router';

let routes = [
    {path: '/', component: require('./MovieList.vue')},
    {path: '/movie/:movie_id', component: require('./Movie.vue'), name: 'movie'},
    {path: '/add-movie', component: require('./MovieAdd.vue')},
    {path: '/movie/:movie_id/edit', component: require('./EditMovieInfo.vue'), name: 'movie-edit'},
    {path: '/movie/:movie_id/delete', component: require('./MovieDelete.vue'), name: 'movie-delete'}
];

export default new VueRouter({
    routes
});