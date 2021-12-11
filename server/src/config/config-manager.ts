import Joi from 'joi'
import dotEnv from 'dotenv'
const pjson = require('../../package.json')

dotEnv.config({ path: '.env' }).parsed

const config = {
  app: {
    appName: pjson.name,
    appVersion: pjson.version,
    appPort: process.env.PORT,
    environment: process.env.NODE_ENV,
    isTestEnv: process.env.NODE_ENV === 'test',
    isDevEnv: process.env.NODE_ENV === 'development',
    isProductionEnv: process.env.NODE_ENV === 'production',
    appSecret: process.env.APP_SECRET as string,
    adminSecret: process.env.ADMIN_SECRET as string,
    host: process.env.HOST,
    frontEndURL: process.env.FRONT_END_URL,
  },

  database: {
    mongo: {
      url: process.env.MONGO_URL as string,
    },
  },

  redis: {
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASS || undefined,
  },

  firebase: {
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    projectId: process.env.FIREBASE_PROJECT_ID,
  },

  telegram: {
    botToken: process.env.TELEGRAM_BOT_TOKEN,
    chatId: process.env.TELEGRAM_BOT_CHAT_ID,
  },

  elasticSearch: {
    host: process.env.ELASTICSEARCH_HOST,
  },
}

const validateConfiguration = () => {
  const { error } = Joi.object({
    app: {
      appName: Joi.string().required(),
      appVersion: Joi.string().required(),
      appPort: Joi.string().required(),
      environment: Joi.string().required(),
      isTestEnv: Joi.boolean().required(),
      isDevEnv: Joi.boolean().required(),
      isProductionEnv: Joi.boolean().required(),
      appSecret: Joi.string().required(),
      adminSecret: Joi.string().required(),
      host: Joi.string().required(),
      frontEndURL: Joi.string().required(),
    },

    database: {
      mongo: {
        url: Joi.string().required(),
      },
    },

    redis: {
      host: Joi.string().required(),
      password: Joi.string(),
    },

    firebase: {
      clientEmail: Joi.string().required(),
      privateKey: Joi.string().required(),
      projectId: Joi.string().required(),
    },

    telegram: {
      botToken: Joi.string().required(),
      chatId: Joi.string().required(),
    },

    elasticSearch: {
      host: Joi.string().required(),
    },
  })
    .required()
    .unknown()
    .validate(config, { abortEarly: false, convert: false })

  if (error) throw error
}

export = { config, validateConfiguration }
