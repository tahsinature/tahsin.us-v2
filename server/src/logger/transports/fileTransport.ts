import { format, transports } from 'winston'

const fileTransport = new transports.File({
  level: 'error',
  filename: './logs/error.log',
  format: format.json({
    replacer: (key, value) => {
      if (key === 'error') {
        return {
          message: (value as Error).message,
          stack: (value as Error).stack,
        }
      }
      return value
    },
  }),
})

export default fileTransport
