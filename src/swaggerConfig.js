const swaggerJsdoc = require('swagger-jsdoc');

const servers = [
    {
        url: 'https://elated-rose-moccasins.cyclic.app/',
        description: 'Deploy da aplicação. Documentacao API PDV',
    },
    {
        url: `http://localhost:${process.env.PORTA}`,
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
    },
    {
        name: 'Clientes',
        description: 'Operações relacionadas a Clientes',
    },
    {
        name: 'Produtos',
        description: 'Operações relacionadas a Produtos',
    },
    {
        name: 'Pedidos',
        description: 'Operações relacionadas a Pedidos',
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
    './src/documentacao/pedido/*.js',
]

const config = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API PDV Frente de Caixa.',
            version: '1.3.0',
            description: 'API Desafio Final Cubos Academy',
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
