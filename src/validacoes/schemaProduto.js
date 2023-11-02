const yup = require('yup');
const { pt } = require('yup-locales');
yup.setLocale(pt);
const schemaProduto = yup.object({
    descricao: yup.string().required(),
    quantidade_estoque: yup.number().integer().moreThan(-1).required(),
    valor: yup.number().positive().required(),
    categoria_id: yup.number().integer().required()
});

module.exports = schemaProduto;