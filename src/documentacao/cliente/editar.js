/**
 * @swagger
 * /cliente/{id}:
 *   put:
 *     tags:
 *       - Clientes
 *     summary: Atualizar informações do cliente.
 *     description: Atualiza informações do cliente de id informado no parâmentro da rota.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
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
 *                 example: joão 
 *                 description: Novo nome do cliente.
 *               email:
 *                 type: string
 *                 example: joao@email.com 
 *                 description: Novo email do ciente.
 *               cpf:
 *                 type: string
 *                 example: 11223344551 
 *                 description: Novo cpf do cliente.
 *               cep:
 *                 type: string
 *                 example: 11111111 
 *                 description: novo cep do endereço do cliente.
 *               rua:
 *                 type: string
 *                 example: rua x 
 *                 description: nova rua do endereço cliente.
 *               numero:
 *                 type: string
 *                 example: 123 
 *                 description: novo numero do endereço do cliente.
 *               bairro:
 *                 type: string
 *                 example: bairro z 
 *                 description: novo bairro do endereço do cliente.
 *               cidade:
 *                 type: string
 *                 example: y 
 *                 description: nova cidade do endereço do cliente.
 *               estado:
 *                 type: string
 *                 example: AD 
 *                 description: novo estado do endereço do cliente. 
 *     responses:
 *       204:
 *         description: Sucesso. As informações do cliente foram atualizadas.
 *       400:
 *         description: Parâmetros de entrada inválidos ou e-mail já em uso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: Informe todos os campos obrigatórios / O email já está cadastrado.
 *       401:
 *         description: Não autorizado. O token JWT é necessário.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: Usuario não autorizado. 
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