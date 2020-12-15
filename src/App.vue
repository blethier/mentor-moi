<template>
<div class="darkMode">
  <Navbar />
    <router-view></router-view>
  <Footer />
</div>
</template>

<script>
  import Navbar from './components/Navbar'
   import Footer from './components/Footer'
export default {

  components: {
   Navbar,
   Footer
  },
  mounted(){
    this.loadMentors()
  },
   methods: {
         loadMentors() {
            this.isPending = true
             this.$store.dispatch('loadMentors');
            this.isPending = false
        }
   }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;400;500;700&display=swap');

* {
  font-family: 'Josefin Sans', sans-serif;
  font-size : 18px;
}
</style>
