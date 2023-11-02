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
 *                 description: Novo nome do usuário.
 *               email:
 *                 type: string
 *                 description: Novo email do usuário.
 *               senha:
 *                 type: string
 *                 description: Nova senha do usuário.
 *     responses:
 *       204:
 *         description: Sucesso. As informações do usuário foram atualizadas.
 *       400:
 *         description: Parâmetros de entrada inválidos ou e-mail já em uso.
 *       401:
 *         description: Não autorizado. O token JWT é necessário.
 *       500:
 *         description: Erro interno do servidor.
 */