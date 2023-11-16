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
 *         multipart/form-data:
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
 *                 type: number
 *                 description: Valor do produto.
 *               categoria_id:
 *                 type: integer
 *                 description: ID da categoria do produto.
 *               produto_imagem:
 *                 type: string
 *                 format: binary
 *                 description: Imagem do produto (opcion
 *     responses:
 *       204:
 *         description: Sucesso. As informações do produto foram atualizadas.
 *       404:
 *         description: Produto informado não existe.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: O produto informado não existe. 
 *       401:
 *         description: Não autorizado. O token JWT é necessário.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: Usuário não autorizado. 
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