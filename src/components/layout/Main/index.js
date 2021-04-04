import Video from '../../general/Video/Video.vue'

export default {
  name: 'Main',
  inject: ['twitch_client', 'event_bus'],
  data () {
    return {
      hasVideos: false,
      broadcaster_name: '',
      broadcaster_profile_picture_url: '',
      broadcaster_channel_description: '',
      videos: []
    }
  },
  methods: {
    getBroadcasterByName: async function (broadcaster) {
      const streamer = await this.twitch_client.apiClient.helix.users.getUserByName(broadcaster)

      return streamer
    },
    getVideosByBroadcaster: async function (broadcasterID) {
      const videoPaginator = await this.twitch_client.apiClient.helix.videos.getVideosByUserPaginated(broadcasterID)

      return videoPaginator
    },
    getVideoByID: async function (videoID) {
      const video = await this.twitch_client.apiClient.kraken.videos.getVideo(videoID)

      return video
    }
  },
  created () {
    this.event_bus.on('emit-search', (searchString) => {
      this.hasVideos = false
      this.videos = []
      this.broadcaster_name = searchString

      this.getBroadcasterByName(searchString).then(
        (broadcasterData) => {
          if (broadcasterData) {
            this.broadcaster_name = broadcasterData._data.display_name
            this.broadcaster_profile_picture_url = broadcasterData._data.profile_image_url
            this.broadcaster_channel_description = '"' + broadcasterData._data.description + '"'
            const broadcasterID = broadcasterData._data.id
            this.getVideosByBroadcaster(broadcasterID).then(
              (videoData) => {
                if (videoData) {
                  this.hasVideos = true
                  videoData.getNext().then(
                    (data) => {
                      data.map((video) => {
                        this.videos.push(video)
                      })
                    }
                  )
                }
              }
            )
          }
        }
      )
    })
  },
  mounted () {
    if (this.broadcaster) {
      this.getBroadcasterByName(this.broadcaster).then(
        (broadcasterData) => {
          if (broadcasterData) {
            console.log('hello')
          }
        }
      )
    }
  },
  components: {
    Video
  }
}
