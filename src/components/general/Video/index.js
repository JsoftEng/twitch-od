import { formatVideoDuration, formatVideoPublishDate } from '../../../services/util.js'

export default {
  name: 'Video',
  data () {
    return {
      thumbnail_url: null,
      video_url: null,
      duration_formatted: null
    }
  },
  props: {
    title: String,
    thumbnailHeight: Number,
    thumbnailWidth: Number,
    thumbnailURL: String,
    videoURL: String,
    duration: String,
    created: String
  },
  created () {
    if (this.thumbnailURL) {
      this.thumbnail_url = new URL(
        this.thumbnailURL
          .replace('%{width}', this.thumbnailWidth)
          .replace('%{height}', this.thumbnailHeight)
      )
    } else {
      this.thumbnail_url = require('@/assets/no-thumbnail.png')
    }

    this.video_url = new URL(this.videoURL)
    this.duration_formatted = formatVideoDuration(this.duration)
    this.publish_date_formated = formatVideoPublishDate(this.created)
  },
  mounted () {

  }
}
