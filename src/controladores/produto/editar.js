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

            let imagem;
            try {
                imagem = await uploadImagem(path, file.buffer, file.mimetype)
            } catch (error) {
                console.log({ 'mensagem': 'Nao foi possivel carregar a imagem no armazenamento externo.' });
            }

            produto_imagem = imagem ? imagem.url : null;

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