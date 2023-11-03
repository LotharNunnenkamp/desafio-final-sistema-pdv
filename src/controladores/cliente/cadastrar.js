const knex = require("../../conexoes/bancoDeDados");

const cadastrarCliente = async (req, res) => {
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body

    try {
        const cliente = {
            nome,
            email,
            cpf,
            cep: cep || null,
            rua: rua || null,
            numero: numero || null,
            bairro: bairro || null,
            cidade: cidade || null,
            estado: estado || null
        }

        const cadastroDeCliente = await knex('clientes').insert(cliente).returning('*');

        return res.status(201).json(cadastroDeCliente[0]);
    } catch (error) {
        console.log({ 'mensagem': error.message });
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }



}

module.exports = cadastrarCliente;