const knex = require('../../conexoes/bancoDeDados');

const listar = async (req, res) => {
    const { categoria_id } = req.query;
    try {
        if (categoria_id) {
            const categoriaExiste = await knex('categorias').where({ id: categoria_id }).first();

            if (!categoriaExiste) {
                return res.status(404).json({ mensagem: 'Categoria Não encontrada.' })
            }

            const listarProdutosFiltrados = await knex('produtos').where({ categoria_id });

            if (listarProdutosFiltrados.length === 0) {
                return res.status(404).json({ mensagem: 'Nenhum produto encontrado.' });
            }

            return res.status(200).json(listarProdutosFiltrados);
        }

        const listarProdutos = await knex('produtos');

        if (listarProdutos.length === 0) {
            return res.status(404).json({ mensagem: 'Nenhum produto encontrado.' });
        }

        return res.status(200).json(listarProdutos);

    } catch (erro) {
        console.log(erro.message);
        return res.status(500).json('Erro interno do Servidor')
    }
}

module.exports = listar;