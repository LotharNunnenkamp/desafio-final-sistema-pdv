const knex = require('../../conexoes/bancoDeDados')

const editarCliente = async (req, res) => {
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body
    const { id } = req.params
    try {
        const clienteExiste = await knex('clientes').where({ id }).first()

        if (!clienteExiste) {
            return res.status(404).json({
                mensagem: "O cliente informado não existe."
            })
        }

        const emailEncontrado = await knex('clientes').where({ email }).first();

        if (emailEncontrado && emailEncontrado.id != clienteExiste.id) {
            return res.status(400).json({ mensagem: 'Email já cadastrado' });
        }

        const cpfEncontrado = await knex('clientes').where({ cpf }).first();

        if (cpfEncontrado && cpfEncontrado.id != clienteExiste.id) {
            return res.status(400).json({ mensagem: 'CPF já cadastrado' });
        }

        const clienteAtualizado = {
            nome,
            email,
            cpf,
            cep: cep || clienteExiste.cep,
            rua: rua || clienteExiste.rua,
            numero: numero || clienteExiste.numero,
            bairro: bairro || clienteExiste.bairro,
            cidade: cidade || clienteExiste.cidade,
            estado: estado || clienteExiste.estado
        }

        const editar = await knex('clientes').where({ id }).update(clienteAtualizado);

        if (!editar) {
            return res.status(400).json({ mensagem: 'Não foi possivel atualizar o cliente.' })
        }

        return res.status(204).send();


    } catch (error) {
        console.log({ 'mensagem': error.message });
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }
}

module.exports = editarCliente;