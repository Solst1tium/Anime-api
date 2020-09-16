<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <footer-comp></footer-comp>
  </v-app>
</template>
 
<script>
import NavBar from './components/NavBar';
import FooterComp from './components/FooterComp'
 
export default {
  name: 'App',
 
  components: {
    NavBar,
    FooterComp
  },
 
  data: () => ({
    //
  }),
};
</script>