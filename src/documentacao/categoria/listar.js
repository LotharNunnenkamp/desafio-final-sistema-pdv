/**
 * @swagger
 * /categoria:
 *   get:
 *     tags:
 *       - Categoria
 *      
 *     summary: Lista todas as categorias
 *     description: Retorna uma lista de todas as categorias.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sucesso. Retorna a lista de categorias.
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 nome: Categoria 1
 *               - id: 2
 *                 nome: Categoria 2
 *       401:
 *         description: Não autorizado. É necessário um token JWT válido.
 *       500:
 *         description: Erro interno do servidor.
 */