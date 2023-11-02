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
 *                   nome:
 *                     type: string
 *                   descricao:
 *                     type: string
 *                   categoria_id:
 *                     type: integer
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