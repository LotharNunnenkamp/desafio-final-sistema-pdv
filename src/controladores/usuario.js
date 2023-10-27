const knex = require('../conexoes/bancoDeDados');
const bcrypt = require('bcrypt');

const cadastrar = async (req, res) => {
    try {
        const { nome, email, senha } = req.body
        const { usuarioExiste } = req;

        if (usuarioExiste) {
            return res.status(400).json({ mensagem: "Já existe usuário cadastrado com o e-mail informado." });
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10)

        const usuarioCriado = await knex('usuarios').insert({ nome, email, senha: senhaCriptografada })
            .returning(['id', 'nome', 'email']);

        return res.status(201).json(usuarioCriado[0]);
    } catch (erro) {
        console.log({ 'mensagem': erro.message });
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }
}

const atualizar = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        const { usuarioExiste } = req;
        const { usuarioLogado } = req;

        if (usuarioExiste.id !== usuarioLogado.id) {
            return res.status(400).json({ ensagem: "Já existe usuário cadastrado com o e-mail informado." })
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);
        const dadosAtualizacao = { nome, email, senha: senhaCriptografada }

        const atualizar = await knex('usuarios').where({ id: usuarioLogado.id }).update(dadosAtualizacao);

        if (!atualizar) {
            return res.status(400).json({ mensagem: 'Não foi possivel atualiar o usuario.' })
        }

        return res.status(200).json({ mensagem: 'Usuario atualizado com sucesso.' });

    } catch (erro) {
        console.log({ 'mensagem': erro.message });
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }
}

const detalhar = async (req, res) => {
    try {
        const { usuarioLogado } = req;
        return res.status(200).json(usuarioLogado);

    } catch (erro) {
        console.log({ 'mensagem': erro.message });
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }
}

module.exports = {
    cadastrar,
    atualizar,
    detalhar,
}