const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Desafio Final Cubos Academy.',
            version: '1.0.0',
            description: 'Sprint 1',
        },
        tags: [
            {
                name: 'Login',
                description: 'Faça o login para poder utilizar todas as funcionalidades.',
            },
            {
                name: 'Categoria',
                description: 'Operações relacionadas a categorias',
            },
            {
                name: 'Usuarios',
                description: 'Operações relacionadas a Usuario',
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./src/documentacao/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;