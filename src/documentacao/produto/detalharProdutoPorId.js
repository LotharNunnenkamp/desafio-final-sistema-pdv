/**
 * @swagger
 * /produto/{id}:
 *   get:
 *     tags:
 *       - Produtos
 *     summary: Detalhar um produto por ID.
 *     description: Retorna os detalhes de um produto com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto a ser detalhado.
 *     responses:
 *       200:
 *         description: Sucesso. Retorna os detalhes do produto.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 descricao:
 *                   type: string
 *                   example: Brinquedo
 *                 quantidade_estoque:
 *                   type: number
 *                   example: 10
 *                 valor:
 *                   type: number
 *                   example: 100
 *                 categoria_id:
 *                   type: number
 *                   example: 6
 *       404:
 *         description: Produto não encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: O produto informado não foi encontrado.
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
 */