/**
 * @swagger
 * /cliente/{id}:
 *   put:
 *     tags:
 *       - Clientes
 *     summary: Atualizar informações do cliente
 *     description: Atualiza informações do cliente de id informado no parâmentro da rota.
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
 *                 description: Novo nome do cliente.
 *               email:
 *                 type: string
 *                 description: Novo email do ciente.
 *               cpf:
 *                 type: string
 *                 description: Novo cpf do cliente.
 *               cep:
 *                 type: string
 *                 description: novo cep do endereço do cliente.
 *               rua:
 *                 type: string
 *                 description: nova rua do endereço cliente.
 *               numero:
 *                 type: string
 *                 description: novo numero do endereço do cliente.
 *               bairro:
 *                 type: string
 *                 description: novo bairro do endereço do cliente.
 *               cidade:
 *                 type: string
 *                 description: nova cidade do endereço do cliente.
 *               estado:
 *                 type: string
 *                 description: novo estado do endereço do cliente. 
 *     responses:
 *       204:
 *         description: Sucesso. As informações do cliente foram atualizadas.
 *       400:
 *         description: Parâmetros de entrada inválidos ou e-mail já em uso.
 *       401:
 *         description: Não autorizado. O token JWT é necessário.
 *       500:
 *         description: Erro interno do servidor.
 */