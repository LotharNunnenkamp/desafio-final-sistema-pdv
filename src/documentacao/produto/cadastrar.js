/**
 * @swagger
 * /produto:
 *   post:
 *     tags:
 *       - Produtos
 *     summary: Cadastrar Produtos
 *     description: Cria um novo produto.
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
 *       201:
 *         description: Produto cadastrado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               descricao: nome do produto
 *               quantidade_estoque: 2
 *               valor: 1500
 *               categoria_id: 3 
 *       404:
 *         description: Categoria informada não existe.
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