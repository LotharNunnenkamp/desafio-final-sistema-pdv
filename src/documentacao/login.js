/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Login
 * 
 *     summary: Login de Usuário.
 *     description: Realiza a autenticação de um usuário e gera um token de acesso que deve ser inserido no campo Authorize.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: O email do usuário.
 *                 example: teste@email.com
 *               senha:
 *                 type: string
 *                 description: A senha do usuário.
 *     responses:
 *       200:
 *         description: Login bem-sucedido. Retorna um token de acesso.
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               nome: nome do usuario
 *               email: email@email.com
 *       400:
 *         description: Parâmetros de entrada inválidos.
 *       401:
 *         description: Credenciais de login inválidas.
 *       500:
 *         description: Erro interno do servidor.
 */