const swaggerJsdoc = require('swagger-jsdoc');

const servers = [
    {
        url: 'https://elated-rose-moccasins.cyclic.app/',
        description: 'Deploy da aplicação. Documentacao API PDV',
    },
    {
        url: `http://localhost:/3000`,
        description: 'Ambiente de Desenvolvimento - Documentacao API PDV',
    }
];

const tags = [
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
];

const securitySchemes = {
    bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
    },
};

const apis = [
    './src/documentacao/categoria/*.js',
    './src/documentacao/cliente/*.js',
    './src/documentacao/produto/*.js',
    './src/documentacao/usuario/*.js',
]

const config = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API PDV Frente de Caixa.',
            version: '1.0.0',
            description: 'API Desafio Final Cubos Academy: Sprint 1',
        },
        servers,
        tags,
        components: {
            securitySchemes,
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    // apis: ['./src/documentacao/*.js', './src/documentacao/categoria/*.js'],
    apis,
};

const swaggerSpec = swaggerJsdoc(config);

module.exports = swaggerSpec;
