<template>
  <Header />
  <Main />
  <Footer />
</template>

<script>
import Header from './components/layout/Header/Header.vue'
import Main from './components/layout/Main/Main.vue'
import Footer from './components/layout/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang='scss'>
  body {
    margin: 0px;
  }

  #app {
    background-color: #161819;
    height: 100vh;
  }
</style>
