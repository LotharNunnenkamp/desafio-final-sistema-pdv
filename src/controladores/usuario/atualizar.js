const knex = require('../../conexoes/bancoDeDados');
const bcrypt = require('bcrypt');

const atualizar = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        const { usuarioExiste } = req;
        const { usuarioLogado } = req;

        if (usuarioExiste && usuarioExiste.id !== usuarioLogado.id) {
            return res.status(400).json({ ensagem: "Já existe usuário cadastrado com o e-mail informado." })
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);
        const dadosAtualizacao = { nome, email, senha: senhaCriptografada }

        const atualizar = await knex('usuarios').where({ id: usuarioLogado.id }).update(dadosAtualizacao);

        if (!atualizar) {
            return res.status(400).json({ mensagem: 'Não foi possivel atualiar o usuario.' })
        }

        return res.status(204).json({ mensagem: 'Usuario atualizado com sucesso.' });

    } catch (erro) {
        console.log({ 'mensagem': erro.message });
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }
}



module.exports = atualizar;
