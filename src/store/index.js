import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animes: [],
    anime: undefined,
    mangas: [],
    manga: undefined,
    selectedItem: null,
    items: [
      {label: 'Action', value: 1},
      {label: 'Adventure', value: 2},
      {label:  'Cars', value: 3},
      {label: 'Comedy', value: 4},
      {label: 'Dementia', value: 5},
      {label: 'Demons', value: 6},
      {label: 'Mystery', value: 7},
      {label: 'Drama', value: 8},
      {label: 'Ecchi', value: 9},
      {label: 'Fantasy', value: 10} 
    ]
 },
  mutations: {
    GET_MANGAS(state, mangas){
      state.mangas = mangas
    },
    GET_MANGA(state, manga){
      state.manga = manga
    },

    GET_ANIMES(state, animes){
      state.animes = animes
    },
    GET_ANIME(state, anime){
      state.anime = anime
    },
  },
  actions: {
    getMangas({commit}){
      axios.get('https://api.jikan.moe/v3/genre/search/manga?q=manga').then ((response) => {
        commit('GET_MANGAS', response.data.results)
      })
    },
    getManga({commit}){
      axios.get('https://api.jikan.moe/v3/search/manga?q=manga').then ((response) => {
        commit('GET_MANGA', response.data)
      })
    },
    getAnimes({commit}){
      axios.get('https://api.jikan.moe/v3/genre/anime/14').then ((response) => {
        commit('GET_ANIMES', response.data.anime)
      })
    },
    getAnime({commit}){
      axios.get('https://api.jikan.moe/v3/search/anime?q=anime').then ((response) => {
        commit('GET_ANIME', response.data)
      })
    }
  },
  modules: {
  }
})
