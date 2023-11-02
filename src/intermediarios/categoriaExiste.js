const knex = require('../conexoes/bancoDeDados');

const verificarCategoria = async (req, res, next) => {
    const {categoria_id} = req.body
    try {
        const categoriaExiste = await knex('categorias').where({ id: categoria_id }).first()

        if (!categoriaExiste) {
            return res.status(404).json({
                mensagem: "Categoria informada não existe."
            })
        }

        next()
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }

}

module.exports = verificarCategoria