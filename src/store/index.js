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
    selectedItem: '1',
    items: [
      {label: 'Action', value: 1, default: true},
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
    SET_SELECTED(state, newValue){
      state.selectedItem = newValue
    }
  },
  actions: {
    setSelected({commit, state}, newValue){
      commit('SET_SELECTED', newValue)
      return state.selectedItem

    },
    getMangas({commit, state}){
      axios.get('https://api.jikan.moe/v3/genre/manga/' + state.selectedItem).then ((response) => {
        commit('GET_MANGAS', response.data.manga)
      })
    },
    getManga({commit}, id){
      axios.get(`https://api.jikan.moe/v3/search/manga?q=manga${id}`).then ((response) => {
        commit('GET_MANGA', response.data)
      })
    },
    getAnimes({commit, state}){
      axios.get('https://api.jikan.moe/v3/genre/anime/' + state.selectedItem).then ((response) => {
        commit('GET_ANIMES', response.data.anime)
      })
    },
    getAnime({commit}, id){
      axios.get(`https://api.jikan.moe/v3/search/anime?q=anime${id}`).then ((response) => {
        commit('GET_ANIME', response.data)
      })
    },
  },
  modules: {
  },
  getters: {
    selected: (state) => {       
     return state.selectedItem;  
      }
  }
})
