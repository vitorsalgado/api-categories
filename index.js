'use strict'

const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const Categories = require('./src/categories')
const CategoriesSchema = require('./src/categories.schema')
const Swagger = require('./src/swagger')
const SwaggerUi = require('./src/swagger-ui')

const Port = process.env.PORT || 3000
const Server = Hapi.server({ compression: false, port: Port, host: '0.0.0.0' })

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
            .then(() => console.log(`Categories API is online on port: ${Port}`))
            .catch(console.error))
