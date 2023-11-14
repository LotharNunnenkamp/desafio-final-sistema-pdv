const knex = require("../../conexoes/bancoDeDados");
const excluirImagem = require('../../servicos/exclusaoArquivo');

const excluirProdutoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const urlBase = `https://${process.env.BLACKBLAZE_BUCKET}.${process.env.ENDPOINT_S3}/`;
        const produtoExiste = req.produtoExiste;

        if (produtoExiste && produtoExiste.produto_imagem !== null) {
            const imagemASerExcluida = produtoExiste.produto_imagem.slice(urlBase.length);
            await excluirImagem(imagemASerExcluida);
        }

        const produtoExcluido = await knex('produtos').where('id', id).del().returning('*');
        if (!produtoExcluido) {
            return res.status(400).json({ mensagem: 'Não foi possível excluir o produto.' });
        }

        return res.status(200).json(produtoExcluido);

    } catch (erro) {
        console.log(erro.message);
        return res.status('Erro interno do servidor.');
    }

}

module.exports = excluirProdutoPorId;