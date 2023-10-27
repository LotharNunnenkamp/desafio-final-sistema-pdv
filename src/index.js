require('dotenv').config()
const express = require('express');
const rotas = require('./rotas/rotas');

const app = express();
app.use(express.json());
app.use(rotas);

const porta = process.env.PORTA || 3000;
app.listen(porta, () => console.log(`Servidor Desafio 5 rodando na porta:${porta}`));
