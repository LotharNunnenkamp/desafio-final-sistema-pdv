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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: Já existe usuário cadastrado com o e-mail informado.
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
