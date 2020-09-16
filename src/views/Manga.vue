<template>
  <div class="manga">
    <v-container>
       <v-row>
         <v-col>
      <h1>Contenido de Anime</h1>
      <h1>{{animes.results}}</h1>
      </v-col>
      </v-row>
    </v-container>
  </div>
</template>
 
<script>
import {mapState, mapActions} from 'vuex'
 
export default {
  created() {
    this.getAnimes()
  },
  computed: {
    ...mapState(['animes', 'anime'])
  },
    methods: {
    ...mapActions(['getAnimes', 'getAnime']),
  }
}
</script>