require('dotenv').config()
const express = require('express');
const rotas = require('./rotas/rotas');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(rotas);

module.exports = app;