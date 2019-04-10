'use strict'

const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const Categories = require('./categories')
const CategoriesSchema = require('./categories.schema')
const Swagger = require('./swagger')
const SwaggerUi = require('./swagger-ui')

const Port = process.env.PORT || 3000
const Server = Hapi.server({ port: Port, host: 'localhost' })

Server.route(
    {
        method: 'GET',
        path: '/categories',
        handler: (request, ctx) => ctx.response(Categories),
        options: {
            tags: ['api', 'catalog'],
            auth: false,
            response: { schema: CategoriesSchema }
        }
    })

Server
    .register([Inert, Vision, Swagger, SwaggerUi])
    .then(() =>
        Server.start()
            .then(() => console.log(`categories API is online on port: ${Port}`))
            .catch(console.error))
