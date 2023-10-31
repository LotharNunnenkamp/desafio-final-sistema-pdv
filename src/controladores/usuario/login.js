const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const chaveSecreta = require('../../chaveSecreta');

const login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const { usuarioExiste } = req;

        if (!usuarioExiste) {
            return res.status(400).json({ mensagem: 'Email e/ou senha Inválido(s).' })
        }

        const validaSenha = await bcrypt.compare(senha, usuarioExiste.senha);

        if (!validaSenha) {
            return res.status(400).json({ mensagem: 'Email e/ou senha Inválido(s).' })
        }

        const token = jwt.sign({
            id: usuarioExiste.id,
            nome: usuarioExiste.nome,
            email: usuarioExiste.email
        }, chaveSecreta, { expiresIn: '8h' });

        const { senha: senhaCriptografada, ...usuarioSemSenha } = usuarioExiste;

        return res.status(200).json({ usuario: usuarioSemSenha, token });
    } catch (erro) {
        console.log({ 'mensagem': erro.message });
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }
}

module.exports = login;