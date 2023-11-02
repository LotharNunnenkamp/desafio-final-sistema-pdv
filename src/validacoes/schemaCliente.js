const yup = require('yup');
const { pt } = require('yup-locales');
yup.setLocale(pt);
const schemaCliente = yup.object({
    nome: yup.string().require(),
    email: yup.string().email().required(),
    cpf: yup.string()
        .required()
        .matches(/^[0-9]+$/, "Apenas números são aceitos")
        .min(11, 'Deve conter 11 dígitos')
        .max(11, 'Deve conter 11 dígitos'),
    cep: yup.string().matches(/^[0-9]+$/, "Apenas números são aceitos")
        .min(8, 'Deve conter 8 dígitos')
        .max(8, 'Deve conter 8 dígitos'),
    rua: yup.string(),
    numero: yup.string(),
    bairro: yup.string(),
    cidade: yup.string(),
    bairro: yup.string(),
});

module.exports = schemaCliente;