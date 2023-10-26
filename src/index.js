require('dotenv').config()
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json('Ok')
});

const porta = process.env.PORTA || 3000;
app.listen(process.env.PORTA, () => console.log(`Servidor Desafio 5 rodando na porta:${porta}`));
