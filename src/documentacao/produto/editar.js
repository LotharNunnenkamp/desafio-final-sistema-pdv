/**
 * @swagger
 * /produto/{id}:
 *   put:
 *     tags:
 *       - Produtos
 *     summary: Editar informações do produto
 *     description: Edita as informações de um produto cadastrado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descricao:
 *                 type: string
 *                 example: Notebook XPTO
 *                 description: Descrição do produto.
 *               quantidade_estoque:
 *                 type: integer
 *                 example: 2
 *                 description: Quantidade em estoque do produto.
 *               valor:
 *                 type: float
 *                 example: 324999
 *                 description: Valor do produto.
 *               categoria_id:
 *                 type: integer
 *                 example: 1
 *                 description: ID da categoria do produto.
 *     responses:
 *       204:
 *         description: Sucesso. As informações do produto foram atualizadas.
 *       404:
 *         description: Produto informado ou categoria informada não existe.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: O produto ou a categoria informada não existe. 
 *       401:
 *         description: Não autorizado. O token JWT é necessário.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: Usuario não autorizado. 
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