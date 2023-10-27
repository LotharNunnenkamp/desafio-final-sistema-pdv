const knex = require('../conexoes/bancoDeDados');

const listar = async (req, res) => {
    try {
        console.log('Entrou no endpoint categoria');
        const listar = await knex('categorias');
        console.log(listar);
        return res.status(200).json(listar);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

module.exports = {
    listar,
}