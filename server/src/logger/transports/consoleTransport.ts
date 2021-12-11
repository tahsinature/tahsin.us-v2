import { format, transports } from 'winston'

const consoleTransport = new transports.Console({
  level: 'debug',
  format: format.prettyPrint(),
})

export default consoleTransport
