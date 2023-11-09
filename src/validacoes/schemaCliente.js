const yup = require('yup');
const { pt } = require('yup-locales');
yup.setLocale(pt);
const schemaCliente = yup.object({
    nome: yup.string().required(),
    email: yup.string().email().required(),
    cpf: yup.string()
        .required()
        .matches(/^[0-9]+$/, "Apenas números são aceitos no campo CPF")
        .min(11, 'CPF deve conter 11 dígitos')
        .max(11, 'CPF deve conter 11 dígitos'),
    cep: yup.string().matches(/^[0-9]+$/, "Apenas números são aceitos no campo CEP")
        .min(8, 'CEP deve conter 8 dígitos')
        .max(8, 'CEP deve conter 8 dígitos'),
    rua: yup.string(),
    numero: yup.string(),
    bairro: yup.string(),
    cidade: yup.string(),
    bairro: yup.string(),
});

module.exports = schemaCliente;