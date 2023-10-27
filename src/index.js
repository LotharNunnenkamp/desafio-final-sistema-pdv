const app = require('./servidor');


const porta = process.env.PORTA || 3000;
app.listen(porta, () => console.log(`Servidor Desafio 5 rodando na porta:${porta}`));
