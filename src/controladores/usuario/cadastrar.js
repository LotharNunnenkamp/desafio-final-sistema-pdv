const knex = require('../../conexoes/bancoDeDados');
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

module.exports = cadastrar;
