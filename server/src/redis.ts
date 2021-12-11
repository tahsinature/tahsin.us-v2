import configManager from '@root/src/config/config-manager'
import { Tedis } from 'tedis'
const { config } = configManager

class Redis {
  public keys = {
    JSON_DATA: (id: string) => `JSON_DATA_${id}`,
  }
  client = new Tedis({
    port: 6379,
    host: config.redis.host,
  })

  async verifyConnection() {
    const response = await this.client.command('PING')
    if (response !== 'PONG') return Promise.reject('redis connection failed.')
    console.log('redis connected')
  }

  async closeConnection() {
    this.client.close() // make it proper
  }
}

export default new Redis()
