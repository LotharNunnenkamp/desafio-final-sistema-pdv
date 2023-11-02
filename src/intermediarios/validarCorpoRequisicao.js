const schemaYup = require('yup');
const validarCorpoRequisicao = (schemaYup) => async (req, res, next) => {
    try {
        await schemaYup.validate(req.body);
        next();
    } catch (erro) {
        console.log(erro.message);
        return res.status(400).json({ mensagem: erro.message });
    }
}

module.exports = validarCorpoRequisicao;