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
      videos: [],
      video_paginator: null
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
    },
    handleLoadVideos: function () {
      const self = this

      self.video_paginator.getNext().then(
        (data) => {
          data.map((video) => {
            self.videos.push(video)
          })
        }
      )
    }
  },
  created () {
    const self = this

    self.event_bus.on('emit-search', (searchString) => {
      self.hasVideos = false
      self.videos = []
      self.broadcaster_name = searchString

      self.getBroadcasterByName(searchString).then(
        (broadcasterData) => {
          if (broadcasterData) {
            self.broadcaster_name = broadcasterData._data.display_name
            self.broadcaster_profile_picture_url = broadcasterData._data.profile_image_url
            self.broadcaster_channel_description = '"' + broadcasterData._data.description + '"'
            const broadcasterID = broadcasterData._data.id
            self.getVideosByBroadcaster(broadcasterID).then(
              (videoData) => {
                if (videoData) {
                  self.hasVideos = true
                  self.video_paginator = videoData
                  self.video_paginator.getNext().then(
                    (data) => {
                      data.map((video) => {
                        self.videos.push(video)
                      })

                      console.log(self.videos)
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
        (broadcasterData) => {}
      )
    }
  },
  components: {
    Video
  }
}
