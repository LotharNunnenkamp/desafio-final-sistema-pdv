/**
 * @swagger
 * /cliente:
 *   get:
 *     tags:
 *       - Clientes
 *      
 *     summary: Lista todos os clientes cadastrados
 *     description: Essa é a rota que será chamada quando o usuário logado quiser listar todos os clientes cadastrados.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sucesso. Retorna a lista de clientes.
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 nome: joao
 *                 email: joao@email.com
 *                 cpf: 11111111111
 *                 cep: 11111111 
 *                 rua: xxxxx 
 *                 numero: 11111 
 *                 bairro: sapiranga
 *                 cidade: xxxxx
 *                 estado: xxxxx
 *               - id: 2
 *                 nome: xxxxx
 *                 email: xxxxx@xxxxx.com
 *                 cpf: 22222222222
 *                 cep: 22222222 
 *                 rua: xxxxx 
 *                 numero: 22222 
 *                 bairro: xxxxx
 *                 cidade: xxxxx
 *                 estado: xxxxx
 *       401:
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