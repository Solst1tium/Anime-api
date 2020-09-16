<template>
  <div>
    <v-card height="100vh">
      <v-footer absolute class="font-weight-medium" color="blue">
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>Anime / Manga</strong>
        </v-col>
      </v-footer>
    </v-card>
  </div>
</template>
 
<script>
export default {
  name: 'FooterComp'
}
</script>
 
<style>
 
</style>