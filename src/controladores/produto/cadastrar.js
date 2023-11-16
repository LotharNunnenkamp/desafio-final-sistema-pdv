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

            const path = `produtos/${id}/${cadastroDeProduto[0].descricao}`;

            let imagem;
            try {
                imagem = await uploadImagem(path, file.buffer, file.mimetype);
            } catch (error) {
                console.log({ 'mensagem': 'Nao foi possivel carregar a imagem no armazenamento externo.' });
            }

            let produto = cadastroDeProduto;
            if (imagem) {
                produto = await knex('produtos').update({
                    produto_imagem: imagem.url
                }).where({ id }).returning('*');

            }

            return res.status(201).json(produto[0]);
        }

        return res.status(201).json(cadastroDeProduto[0])
    } catch (erro) {
        console.log({ 'mensagem': erro.message });
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }

}

module.exports = cadastrarProduto;