const knex = require('../../conexoes/bancoDeDados');
const uploadImagem = require('../../servicos/uploadArquivo');


const editarProduto = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
    const { id } = req.params
    try {
        const produtoExiste = await knex('produtos').where({ id }).first();

        if (!produtoExiste) {
            return res.status(404).json({
                mensagem: "O produto informado não existe."
            });
        }
        let produto_imagem = null;

        if (req.file) {
            const id = produtoExiste.id;
            const { file } = req;

            const path = `produtos/${id}/${produtoExiste.descricao}`;

            const imagem = await uploadImagem(path, file.buffer, file.mimetype)

            produto_imagem = imagem.url;
            // produto = await knex('produtos').update({
            //     produto_imagem: imagem.url
            // }).where({ id }).returning('*')

        }

        const editar = await knex('produtos').where({ id }).update({
            descricao,
            quantidade_estoque,
            valor,
            categoria_id,
            produto_imagem
        });

        if (!editar) {
            return res.status(400).json({ mensagem: 'Não foi possivel atualizar o produto.' });
        }

        return res.status(204).send();

    } catch (error) {
        console.log({ 'mensagem': error.message });
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }
}

module.exports = editarProduto;