<template>
    <div>
    <div>edit</div>
    <li v-for="movies in moviesStore" :key="movies.id">
        {{movies.name}}
        <button @click="deleteMovie(movies.id)">Delete</button>
        <router-link :to="{name:'edit', params:{id:movies.id}}">
          <button >Edit</button>
        </router-link>
    </li>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'edit',
  data(){
    return{
      id:this.$route.params.id
    }
  },
  mounted() {
    return this.$store.dispatch('getmovies', this.id)
  },
  computed: {
    moviesStore() {
        console.log("this.$store.state.movies", this.$store.state.movies.map(movie=> movie.id))
        const movieIndex = this.$store.state.movies.map(movie=> movie.id))
        return this.$store.state.movies;
    }
  },
};
</script>