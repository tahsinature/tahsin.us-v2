import { createLogger, format } from 'winston'
import fileTransport from '@root/src/logger/transports/fileTransport'
import consoleTransport from '@root/src/logger/transports/consoleTransport'
import elkTransport from '@root/src/logger/transports/elkTransport'
import { config } from '@src/config'

const logger = createLogger({
  format: format.combine(format.timestamp()),
  transports: [fileTransport, ...(config.app.isDevEnv ? [consoleTransport] : [])],
  defaultMeta: { service: 'api' },
})

export const httpLogger = createLogger({
  format: format.combine(format.timestamp()),
  transports: [elkTransport],
  defaultMeta: { service: 'api' },
})

export default logger
