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
      client_id: this.clientID,
      client_secret: this.clientSecret,
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

  /**
   * Initializes instance properties
   * @returns void
   */
  async init () {
    this.clientID = process.env.VUE_APP_CLIENT_ID
    this.clientSecret = process.env.VUE_APP_CLIENT_SECRET
    this.accessToken = await this.getToken()
    this.authProvider = new StaticAuthProvider(this.clientID, this.accessToken)
    this.apiClient = new ApiClient({ authProvider: this.authProvider })
  }
}

export default TwitchAPIClient
