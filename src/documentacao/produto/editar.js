/**
 * @swagger
 * /produto:
 *   put:
 *     tags:
 *       - Produtos
 *     summary: Editar informações do produto
 *     description: Edita as informações de um produto cadastrado.
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
 *                 description: Descrição do produto.
 *               quantidade_estoque:
 *                 type: integer
 *                 description: Quantidade em estoque do produto.
 *               valor:
 *                 type: float
 *                 description: Valor do produto.
 *               categoria_id:
 *                 type: integer
 *                 description: ID da categoria do produto.
 *     responses:
 *       204:
 *         description: Sucesso. As informações do produto foram atualizadas.
 *       404:
 *         description: Produto informado ou categoria informada não existe.
 *       401:
 *         description: Não autorizado. O token JWT é necessário.
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