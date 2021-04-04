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
import mitt from 'mitt'

export default {
  name: 'App',
  data () {
    return {
      isFetching: true,
      client: new TwitchAPIClient(),
      eventBus: mitt()
    }
  },
  components: {
    Header,
    Main,
    Footer
  },
  methods: {
    initClient: function () {
      this.client.init().then(
        () => {
          console.log(process.env.VUE_APP_CLIENT_ID)
          this.isFetching = false
        }
      )
    }
  },
  mounted () {
    this.initClient()
  },
  provide () {
    return {
      twitch_client: this.client,
      event_bus: this.eventBus
    }
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

  input {
    &:focus {
      outline: none;
    }
  }

  .root {
    background-color: #161819;
    height: 100vh;
    overflow: hidden;

    .data-fetch {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100vh;
      font-family: Roboto, sans-serif;
      color: #8EF2FF;
      margin: 0px;
    }
  }
</style>
