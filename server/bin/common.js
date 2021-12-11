const dotenv = require('dotenv')
const result = dotenv.config({ path: `.env` })

const envMap = {
  test: 'test',
  local: 'local',
  development: 'development',
  production: 'production',
  default: 'local',
}

if (!envMap[process.env.NODE_ENV]) process.env.NODE_ENV = envMap.default
console.log(`environment: ${process.env.NODE_ENV}`)

if (result.error) console.error(result.error.message)

module.exports.getWorkDir = () => {
  const fs = require('fs')
  const path = require('path')
  const project = path.join(__dirname, '..', 'tsconfig.json')
  const isDistDirExists = fs.existsSync(path.join(__dirname, '..', 'dist'))
  let workDir = 'dist'

  if (!isDistDirExists) {
    require('ts-node').register({ project, compiler: 'ttypescript' })
    workDir = 'src'
    console.log('running typescript from src')
  } else console.log('running javascript from dist')

  return workDir
}
