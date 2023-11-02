const knex = require('../../conexoes/bancoDeDados');

const listar = async (req, res) => {
    try {
        const listarClientes = await knex('clientes');
        return res.status(200).json(listarClientes);
    } catch (error) {
        console.log({ 'mensagem': error.message });
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }
}

module.exports = listar;