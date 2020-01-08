import Vue from 'vue';
import Vuex from 'vuex';
import db from './views/firebase'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies:[]
  },
  mutations: {
    setMovies(state, movies){
      state.movies = movies
    }
  },
  actions: {
    async getmovies({commit}){
      const movies = [];
      const response = await db.collection('movies').get()
          response.forEach((res)=>{
            console.log(res.id);
            console.log(res.data());
            
            let moviesObj = res.data()
            moviesObj.id = res.id
            console.log( moviesObj.id);
            movies.push(moviesObj)
          })
          commit('setMovies', movies)
    },
    addMovie({_, dispatch}, { name, description}){
      db.collection("movies").add({
        name,
        description
      })
      .then((data)=>dispatch('getMovies'))
    },
    deleteMovie({dispatch}, { id }){
      db.collection("movies").doc(id).delete()
      .then((data)=>dispatch('getmovies'))
    },
    editMovie({dispatch}, { id, name, description }){
      db.collection("movies").doc(id).update({
        name,
        description,
      }).then(function() {
        console.log("updated");
      });
    }
  },
});

