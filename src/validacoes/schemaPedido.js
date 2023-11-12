const yup = require('yup');
const { pt } = require('yup-locales');
yup.setLocale(pt);
const schemaPedido = yup.object({
    cliente_id: yup.number().required(),
    observacao: yup.string(),
    pedido_produtos: yup.required().array().of(
        yup.object().shape({
            produto_id: yup.number().required(),
            quantidade_produto: yup.number().integer().moreThan(0).required()
        })
    )
});

module.exports = schemaPedido;