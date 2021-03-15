<template>
  <div class='root' v-if='!isFetching'>
    <Header />
    <Main />
    <Footer />
  </div>
  <div class='root' v-else>
    <main class='data-fetch'>
      <h1>Fetching!</h1>
    </main>
  </div>
</template>

<script>
import Header from './components/layout/Header/Header.vue'
import Main from './components/layout/Main/Main.vue'
import Footer from './components/layout/Footer/Footer.vue'
import TwitchAPIClient from './services/twitch-api-client'

// eslint-disable-next-line no-unused-vars
const client = new TwitchAPIClient()

export default {
  name: 'App',
  data () {
    return {
      isFetching: true
    }
  },
  components: {
    Header,
    Main,
    Footer
  },
  methods: {
    initClient: function () {
      client.init().then(
        () => {
          this.isFetching = false
          console.log(this)
        }
      )
    }
  },
  mounted () {
    this.initClient()
  },
  provide: {
    twitch_client: client
  }
}
</script>

<style lang='scss'>
  body {
    margin: 0px;
  }

  h1, h2, h3 {
    cursor: default;
  }

  .root {
    display: flex;
    flex-direction: column;
    background-color: #161819;
    height: 100vh;

    .data-fetch {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-family: Roboto, sans-serif;
      color: #8EF2FF;
      margin: 0px;
    }
  }
</style>
