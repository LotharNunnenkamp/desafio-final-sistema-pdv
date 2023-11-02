const knex = require('../conexoes/bancoDeDados');

const validarCliente = async (req, res, next) => {

    const { email, cpf } = req.body

    try {
        const emailCadastrado = await knex('clientes').where(email);

        if (emailCadastrado) {
            return res.status(400).json({ messagem: 'E-mail já está cadastrado' })
        }

        const cpfCadastrado = await knex('clientes').where(cpf);
        if (cpfCadastrado) {
            return res.status(400).json({ messagem: 'CPF já está cadastrado' })
        }

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = validarCliente