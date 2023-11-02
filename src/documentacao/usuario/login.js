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
 *         description: Login bem-sucedido. Retorna os dados do usuario logado e o token de acesso.
 *         content:
 *           application/json:
 *             example:
 *               usuario:
 *                 id: 1
 *                 nome: nome do usuario
 *                 email: email@email.com
 *               token: Bearer token
 *  
 *       400:
 *         description: Credenciais de login inválidas.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: Não autorizado. É necessário um token JWT válido.
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