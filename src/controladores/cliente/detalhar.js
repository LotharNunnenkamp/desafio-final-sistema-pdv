const knex = require('../../conexoes/bancoDeDados');

const detalhar = async (req, res) => {
    const { id } = req.params;
    try {
        const detalharCliente = await knex('clientes').where({ id }).first();

        if (!detalharCliente) {
            return res.status(404).json({ mensagem: "Cliente não encontrado." })
        }

        return res.status(200).json(detalharCliente);
    } catch (error) {
        console.log({ 'mensagem': error.message });
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }
}

module.exports = detalhar;