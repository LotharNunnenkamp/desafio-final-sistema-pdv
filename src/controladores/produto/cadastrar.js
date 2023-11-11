const knex = require('../../conexoes/bancoDeDados');
const uploadImagem = require('../../servicos/uploadArquivo');

const cadastrarProduto = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body

    try {
        const cadastroDeProduto = await knex('produtos').insert({
            descricao,
            quantidade_estoque,
            valor,
            categoria_id
        }).returning('*')

        if (req.file) {
            const id = cadastroDeProduto[0].id;
            const { file } = req;

            const imagem = await uploadImagem(
                `produtos/${id}/${file.originalname}`,
                buffer = file.buffer,
                mimetype = file.mimetype
            )

            produto = await knex('produtos').update({
                produto_imagem: imagem.url
            }).where({ id }).returning('*')

            return res.status(201).json(produto);
        }

        return res.status(201).json(cadastroDeProduto[0])
    } catch (error) {
        console.log({ 'mensagem': error.message });
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }

}

module.exports = cadastrarProduto;