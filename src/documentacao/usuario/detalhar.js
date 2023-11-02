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