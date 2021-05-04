<template>
  <div class='root'>
    <Header />
    <Main />
    <Footer />
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
      initializing: true,
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
          this.initializing = false
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
  }
</style>
