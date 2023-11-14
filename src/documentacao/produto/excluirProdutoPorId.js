/**
 * @swagger
 * /produto/{id}:
 *   delete:
 *     tags:
 *       - Produtos
 *     summary: Excluir Produto por ID.
 *     description: Essa é a rota que será chamada quando o usuário logado quiser excluir um de seus produtos cadastrados.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto a ser excluído.
 *     responses:
 *       200:
 *         description: Sucesso. Retorna o produto excluído.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 descricao:
 *                   type: string
 *                 preco:
 *                   type: number
 *       400:
 *         description: Produto não pode ser excluído. Há pedido(s) com o produto.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: Produto não pode ser excluído. Há pedido(s) com o produto.
 *       404:
 *         description: Produto não encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: Produto não encontrado.
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