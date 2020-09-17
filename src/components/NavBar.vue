<template>
    <div>
      <v-app-bar app color="grey darken-4" dark src="../assets/navbar.png">        
        <v-spacer></v-spacer>
        <v-btn to="/" text>Home</v-btn>        
        <v-spacer></v-spacer>
      </v-app-bar>
    </div>
</template>
 
<script>
  export default {
    name: 'NavBar',
    
  }
</script>
 
<style>
.v-app-bar{
  background-image: '../assets/navbar.png';
}
 
</style>
