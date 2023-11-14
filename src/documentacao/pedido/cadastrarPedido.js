/**
 * @swagger
 * /produto:
 *   post:
 *     tags:
 *       - Pedidos
 *     summary: Cadastrar Pedidos
 *     description: Cadastrar um novo pedido.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cliente_id:
 *                 type: number
 *                 example: 1
 *                 description: Id do cliente.
 *               observação:
 *                 type: string
 *                 example: Entregar entre 10am e 14pm 
 *                 description: Observações acerca do pedido.
 *               pedido_produto:
 *                 type: array
 *                 items: 
 *                   type: object.
 *                   properties:
 *                     produto_id: 
 *                       type: integer
 *                       example: 1
 *                       description: O id do produto dentro do pedido.
 *                     quantidade_produto:
 *                       type: integer
 *                       exemple: 10
 *                       description: A quantidade de produtor adquiridos no pedido.                                               
 *     responses:
 *       201:
 *         description: Pedido cadastrado com sucesso.
 *         content:
 *           application/json:
 *             schema:               
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string  
 *                   example: Pedido cadastrado com sucesso.
 *                
 *       404:
 *         description: Produto não existe. / Cliente não existe
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: O produtou ou cliente informado não existe. 
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
