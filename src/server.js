/* eslint-disable quotes */
require('dotenv').config()
const Hapi = require('@hapi/hapi')
const { credentials } = require('./config/index')

const init = async () => {
  const server = Hapi.Server({
    port: process.env.HTTPS_PORT,
    tls: credentials,
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return /* html */ `<h1>Hello World Hapi https</h1>`
    }
  })

  await server.start()
  console.log(`Server running on https://pptik-local.pptik.id:${process.env.HTTPS_PORT}`)

  process.on('unhandleRejection', (err) => {
    console.log(err)
    process.exit(1)
  })
}

init()
