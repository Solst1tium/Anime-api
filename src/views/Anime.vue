<template>
  <div class="anime">
    <v-container>
      <h1>Listado de animes</h1>
      <v-row>
        <v-col v-for="anime in animes" :key="anime.mal_id" cols="4" class="my-3">
          <v-card class="mx-auto">
            <v-img :src="anime.image_url" height="250px"></v-img>
            <v-card-title>{{ anime.title }}</v-card-title>
            <v-card-subtitle>{{ anime.synopsis }}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="info" text>Ver detalless</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
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