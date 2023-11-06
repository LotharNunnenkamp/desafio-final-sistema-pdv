/**
 * @swagger
 * /listar:
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
 *                 nome: Categoria 1
 *               - id: 2
 *                 nome: Categoria 2
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