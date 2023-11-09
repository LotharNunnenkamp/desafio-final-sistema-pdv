/**
 * @swagger
 * /produto:
 *   get:
 *     tags:
 *       - Produtos
 *     summary: Listar produtos com ou sem filtro de categoria.
 *     description: Retorna uma lista de produtos, podendo ser filtrados por categoria ou listando todos os produtos.
 *     parameters:
 *       - in: query
 *         name: categoria_id
 *         schema:
 *           type: integer
 *         description: ID da categoria para filtrar os produtos (opcional).
 *     responses:
 *       200:
 *         description: Sucesso. Retorna a lista de produtos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   descricao:
 *                     type: string
 *                     example: Brinquedo
 *                   quantidade_estoque:
 *                     type: number
 *                     example: 10
 *                   valor:
 *                     type: number
 *                     example: 100
 *                   categoria_id:
 *                     type: number
 *                     example: 6
 *       404:
 *         description: Categoria não encontrada ou Nenhum produto encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: Não encontrado.
 *       500:
 *         description: Erro interno do servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: Erro interno do servidor.
 *                  
 */