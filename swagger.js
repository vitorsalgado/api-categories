'use strict'

const Swagger = require('hapi-swaggered')

module.exports = {
    plugin: Swagger,
    options: {
        auth: false,
        tags: [
            {
                name: 'catalog',
                description: 'Catalog Endpoints'
            }
        ],
        tagging: {
            mode: 'tags'
        },
        info: {
            title: 'Categories API',
            version: 'Categories API',
            description: 'E-Commerce Categories Provider'
        }
    }
}
