/**
 * @swagger
 * /cliente:
 *   post:
 *     tags:
 *       - Clientes
 *     summary: Cadastrar Cliente
 *     description: Cria um novo cliente.
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
 *                 description: O nome do cliente.
 *               email:
 *                 type: string
 *                 example: joao@email.com 
 *                 description: O email do ciente.
 *               cpf:
 *                 type: string
 *                 example: 11223344551 
 *                 description: O cpf do cliente.
 *               cep:
 *                 type: string
 *                 example: 11111111 
 *                 description: O cep do endereço do cliente.
 *               rua:
 *                 type: string
 *                 example: rua x 
 *                 description: A rua do endereço cliente.
 *               numero:
 *                 type: string
 *                 example: 123 
 *                 description: O numero do endereço do cliente.
 *               bairro:
 *                 type: string
 *                 example: bairro z 
 *                 description: O bairro do endereço do cliente.
 *               cidade:
 *                 type: string
 *                 example: y 
 *                 description: A cidade do endereço do cliente.
 *               estado:
 *                 type: string
 *                 example: AD 
 *                 description: O estado do endereço do cliente.  
 *     responses:
 *       201:
 *         description: Cliente cadastrado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               nome: nome do usuario
 *               email: email@email.com
 *               cpf: 11111111111    
 *       400:
 *         description: Parâmetros de entrada inválidos ou usuário já existente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: Parâmentros de entrada inválidos ou usuário já existe.          
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
