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
 *                 example: Notebook XPTO
 *                 description: Descrição do produto.
 *               quantidade_estoque:
 *                 type: integer
 *                 example: 3
 *                 description: Quantidade em estoque do produto.
 *               valor:
 *                 type: float
 *                 example: 359999
 *                 description: Valor do produto.
 *               categoria_id:
 *                 type: integer
 *                 example: 1
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: A categoria informada não existe. 
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