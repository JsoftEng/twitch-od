import Video from '../../general/Video/Video.vue'

export default {
  name: 'Main',
  inject: ['twitch_client'],
  created () {
    this.hasVideos = false
  },
  mounted () {
    // debugger
    // console.log(this.twitch_client)
    // const name = this.twitch_client.ApiClient.helix.users.getUserByName('cohhcarnage')
  },
  components: {
    Video
  }
}
