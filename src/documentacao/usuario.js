/**
 * @swagger
 * /usuario:
 *   post:
 *     tags:
 *       - Usuarios
 *     summary: Cadastrar Usuário
 *     description: Cria um novo usuário.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: O nome do usuário.
 *               email:
 *                 type: string
 *                 description: O email do usuário.
 *               senha:
 *                 type: string
 *                 description: A senha do usuário.
 *     responses:
 *       201:
 *         description: Usuário cadastrado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               nome: nome do usuario
 *               email: email@email.com 
 *       400:
 *         description: Parâmetros de entrada inválidos ou usuário já existente.
 *       500:
 *         description: Erro interno do servidor.
 */

/**
 * @swagger
 * /usuario:
 *   get:
 *     tags:
 *       - Usuarios
 * 
 *     summary: Detalhar informações do usuário autenticado
 *     description: Retorna informações detalhadas do usuário autenticado.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sucesso. Retorna detalhadas do usuário.
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               nome: nome do usuario
 *               email: email@email.com
 *       401:
 *         description: Não autorizado. É necessário um token JWT válido.
 *       500:
 *         description: Erro interno do servidor.
 */

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