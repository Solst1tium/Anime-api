<template>
  <div class="manga">
    <v-container>
      <h1>Listado de Mangas</h1>
      <v-container fluid>
          <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select :items="items" item-text="label" v-model="selectedGenre" @input="setSelected(selectedGenre.value)"
        return-object item-value="value" label="Selecciona un genero"></v-select>        
      </v-col>   
    </v-row>
  </v-container>
      <v-row>
        <v-col v-for="manga in mangas" :key="manga.mal_id" cols="4" class="my-3">
          <v-card class="mx-auto">
            <v-img :src="manga.image_url" height="250px"></v-img>
            <v-card-title>{{ manga.title }}</v-card-title>
            <v-card-subtitle>{{ manga.synopsis }}</v-card-subtitle>
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
  data() {
    return {
      selectedGenre: {}
    }
  },
  created() {
    this.getMangas()
  },
  computed: {
    ...mapState(['mangas', 'manga', 'items', 'selectedItem']),
    value(){
      return this.selectedGenre.value
    },
    label(){
      return this.selectedGenre.label
    },

    selectedItem: {
      get(){
        return this.$store.state.selectedItem
      },
      set(newValue){
        return this.$store.dispatch('setSelected', newValue)
      }
      
    }
  },
    methods: {
    ...mapActions(['getMangas', 'getManga', 'setSelected']), 
    setSelected(value){
      this.selectedItem = value
      this.getMangas()
    }   
  }
}
</script>