import { ApiClient } from 'twitch'
import { StaticAuthProvider } from 'twitch-auth'
import axios from 'axios'

/**
 * Twitch API Service client
 */
class TwitchAPIClient {
  async getToken () {
    const url = new URL('https://id.twitch.tv/oauth2/token')
    const params = {
      client_id: 'jxur1szwxnzgbaf900u6tlr78ucohf',
      client_secret: 'lvkpmoccj71ggv4nlqnyg1rqt0om1i',
      grant_type: 'client_credentials'
    }
    url.search = new URLSearchParams(params).toString()

    const config = {
      method: 'POST',
      url: url
    }

    const response = await axios(config)

    const token = response.data.access_token

    return token
  }

  async getUserByLogin (userLogin, token) {
    const url = new URL('https://api.twitch.tv/helix/users')
    const params = {
      login: userLogin
    }
    url.search = new URLSearchParams(params).toString()
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'client-id': 'jxur1szwxnzgbaf900u6tlr78ucohf',
        Authorization: `Bearer ${token}`
      }
    })

    return response.json()
  }

  async getVideos (userID, token) {
    const url = new URL('https://api.twitch.tv/helix/videos')
    const params = {
      user_id: userID
    }
    url.search = new URLSearchParams(params).toString()

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'client-id': 'jxur1szwxnzgbaf900u6tlr78ucohf',
        Authorization: `Bearer ${token}`
      }
    })

    return response.json()
  }

  async getChannel (userID, token) {
    const url = new URL('https://api.twitch.tv/helix/users')
    const params = {
      login: 'cohhcarnage'
    }
    url.search = new URLSearchParams(params).toString()

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'client-id': 'jxur1szwxnzgbaf900u6tlr78ucohf',
        Authorization: `Bearer ${token}`
      }
    })

    return response.json()
  }

  /**
   * Initializes instance properties
   * @returns void
   */
  async init () {
    this.clientID = 'jxur1szwxnzgbaf900u6tlr78ucohf'
    this.accessToken = await this.getToken()
    this.authProvider = new StaticAuthProvider(this.clientID, this.accessToken)
    this.ApiClient = new ApiClient({ authProvider: this.authProvider })
  }
}

export default TwitchAPIClient
