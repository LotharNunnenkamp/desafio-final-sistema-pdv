/**
 * @swagger
 * /usuario:
 *   put:
 *     tags:
 *       - Usuarios
 *     summary: Atualizar informações do usuário
 *     description: Atualiza informações do usuário autenticado.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: grupo20
 *                 description: O nome do usuário.
 *               email:
 *                 type: string
 *                 example: grupo20@email.com
 *                 description: O email do usuário.
 *               senha:
 *                 type: string
 *                 example: 12345
 *                 description: A senha do usuário.
 *     responses:
 *       204:
 *         description: Sucesso. As informações do usuário foram atualizadas.
 *       400:
 *         description: Parâmetros de entrada inválidos ou e-mail já em uso.
 *       401:
 *         description: Não autorizado. É necessário um token JWT válido.
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