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
 *                 description: Imagem do produto (opcional).
 *     responses:
 *       201:
 *         description: Produto cadastrado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 descricao:
 *                   type: string
 *                   example: nome do produto
 *                 quantidade_estoque:
 *                   type: integer
 *                   example: 2
 *                 valor:
 *                   type: number
 *                   example: 1500
 *                 categoria_id:
 *                   type: integer
 *                   example: 3 
 *                 produto_imagem:
 *                   type: string
 *                   format: binary
 *                   description: Imagem do produto (opcional).
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