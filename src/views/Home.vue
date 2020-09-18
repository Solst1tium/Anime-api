<template>
  <v-container>
    <v-row class="ma-auto">
      <v-container class="backgroundAnime main d-flex aling-items-center">
      <v-col cols="12" class="d-flex justify-center">
        <v-btn depressed large color="light-green accent-4" dark to='/anime' class="aling-center my-auto">Anime</v-btn>
      </v-col>
      </v-container>
      <v-container class="backgroundManga main d-flex aling-items-center">
      <v-col cols="12" class="d-flex justify-center">
        <v-btn depressed large color="amber darken-1" dark to='/manga' class="aling-center my-auto">Manga</v-btn>
      </v-col>
      </v-container>
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
<style scoped>
  .main{
    height: 80vh;
  }
  .backgroundManga {
    background-image: url('https://i.pinimg.com/originals/ab/bf/42/abbf426b7813f5778fba14dcfd5af24f.png');
    background-position: center;
    background-size:cover;
    width: 50%;
  }
  .backgroundAnime {
    background-image: url('https://i.pinimg.com/originals/38/0a/62/380a625c516360ca1607261bc8ec338a.jpg');
    background-position: center;
    background-size:cover;
    width: 50%;
  }
</style>