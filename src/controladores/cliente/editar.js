
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

        const emailEncontrado = await knex(clientes).where({ email }).first();

        if (emailEncontrado.id != clienteExiste.id) {
            return res.status(400).json({ mensagem: 'Email já cadastrado' })
        }

        const clienteAtualizado = {
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

        const editar = await knex('clientes').where({ id }).update(clienteAtualizado)

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