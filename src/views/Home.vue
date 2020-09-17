<template>
  <v-container>
    <v-row class="ma-auto">
      <v-container class="backgroundAnime main d-flex aling-items-center">
      <v-col cols="12" class="d-flex justify-center">
        <v-btn depressed large color="red accent-4" dark to='/anime' class="aling-center my-auto">Anime</v-btn>
      </v-col>
      </v-container>
      <v-container class="backgroundManga main d-flex aling-items-center">
      <v-col cols="12" class="d-flex justify-center">
        <v-btn depressed large color="red accent-4" dark to='/manga' class="aling-center my-auto">Manga</v-btn>
      </v-col>
      </v-container>
    </v-row>
  </v-container>
</template>
 
<script> 
import {mapState, mapActions} from'vuex'

export default {
  name: 'Home',
  data() {
    return {
      imageAnime: 'https://pm1.narvii.com/6456/752e553145e5a5cc9f06abdba6e3e276d019c75b_hq.jpg',
      imageManga: 'https://i.pinimg.com/originals/ab/bf/42/abbf426b7813f5778fba14dcfd5af24f.png'
    }
  },
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
    background-image: url('https://inmanga.com/thumbnails/manga/Nanatsu-no-Taizai/74d824c1-85ba-4544-8fb2-aa4ccecd9eea');
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