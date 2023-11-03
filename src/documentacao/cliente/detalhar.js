/**
 * @swagger
 * /cliente/:id:
 *   get:
 *     tags:
 *       - Clientes
 *     summary: Detalhar um cliente por ID.
 *     description: Retorna os detalhes de um cliente com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cliente a ser detalhado.
 *     responses:
 *       200:
 *         description: Sucesso. Retorna os detalhes do cliente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 email:
 *                   type: string
 *                 cpf:
 *                   type: string
 *                 cep:
 *                   type: string
 *                 rua:
 *                   type: string
 *                 numero:
 *                   type: string
 *                 bairro:
 *                   type: string
 *                 cidade:
 *                   type: string
 *                 estado:
 *                   type: string
 *       404:
 *         description: Cliente não encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: Cliente não encontrado  
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