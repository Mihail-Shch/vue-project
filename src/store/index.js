import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const link = 'https://api.themoviedb.org/3/';
const apiKey = '41d5e9f8f7e17001c1398ef7e512c274';

export default new Vuex.Store({
  state: {
    films: [],
    favorite: [],
    movieItem: null,
    isLoaded: false
  },
  actions: {
    async getFilms({commit}, number) {
      const res = await fetch(
        `${link}movie/top_rated?api_key=${apiKey}&page=${number}`
      );
      const resp = await res.json();
      
      commit('setFilms', resp.results)
    },
    addToFavorite({commit}, film) {
      commit('addToCart', film)
    },
    async getMovieInfo({commit}, film) {
      commit('setIsLoaded', false)
      const res = await fetch(`${link}movie/${film.id}?api_key=${apiKey}`);
      const resp = await res.json()

      commit ('setMovieItem', resp)
      commit('setIsLoaded', true)
    }
  },
  mutations: {
    setFilms(state, films) {
      state.films = films;
    },
    addToCart(state, film) {
      state.favorite.push(film)
    },
    deleteFilm(state, film) {
      state.favorite = state.favorite.filter(f => f.id !== film.id)
    },
    setMovieItem(state, film) {
      state.movieItem = film
    },
    setIsLoaded(state, boolean) {
      state.isLoaded = boolean
    }
  },
  getters: {
    allFilms(state) {
      return state.films;
    },
    getFavorite(state) {
      return state.favorite;
    },
    getMovieItem(state) {
      return state.movieItem;
    },
    getIsLoaded(state) {
      return state.isLoaded;
    }
  },
  modules: {
  }
})
