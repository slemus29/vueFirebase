<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>Add movie</h1>
    <label>Name</label>
    <input type="text" v-model="movies.name" >
    <ul>
      <li v-for="movies in moviesStore" :key="movies.id">
        {{movies.name}}
        <button @click="deleteMovie(movies.id)">Delete</button>
        <router-link :to="{name:'edit', params:{id:movies.id}}">
          <button >Edit</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  data(){
    return{
      movies:{
        name:'',
        description:'',
      }
    }
  },
  mounted() {
    return this.$store.dispatch('getmovies')
  },
  computed: {
    moviesStore() {
      return this.$store.state.movies;
    }
  },
  method: {
    deleteMovie(id){
      return this.$store.dispatch('deleteMovie', id);
    }
  }

};
</script>