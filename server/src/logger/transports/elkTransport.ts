import { config } from '@root/src/config'
import { ElasticsearchTransport } from 'winston-elasticsearch'

const elkTransport = new ElasticsearchTransport({
  clientOpts: { node: config.elasticSearch.host },
  index: `logs-${'http'}`,
  silent: config.app.isTestEnv,
})

export default elkTransport
