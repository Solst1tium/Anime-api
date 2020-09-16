<template>
  <v-container class=" main d-flex align-items-center">  
      <v-row class="ma-auto">
        <v-col   cols="6" class="d-flex justify-center">
          <v-btn depressed large color="dark" dark to="/anime">Anime</v-btn>
        </v-col>      
        <v-col cols="6" class="d-flex justify-center">
          <v-btn depressed large color="dark" dark to="/manga">Manga</v-btn>
        </v-col>
      </v-row>  
  </v-container>
</template>
 
<script> 
import {mapState, mapActions} from'vuex'

export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapState(['animes', 'anime'])
  },
  methods: {
    ...mapActions(['getAnimes'])
  },

}
</script>
<style>
  .main{
    height: 80vh;
  }
</style>