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
 *                 description: O nome do cliente.
 *               email:
 *                 type: string
 *                 description: O email do cliente.
 *               cpf:
 *                 type: string
 *                 description: O cpf do cliente.
 *               cep:
 *                 type: string
 *                 description: O cep do endereço do cliente.
 *               rua:
 *                 type: string
 *                 description: A rua do endereço cliente.
 *               numero:
 *                 type: string
 *                 description: O numero do endereço do cliente.
 *               bairro:
 *                 type: string
 *                 description: o bairro do endereço do cliente.
 *               cidade:
 *                 type: string
 *                 description: a cidade do endereço do cliente.
 *               estado:
 *                 type: string
 *                 description: o estado do endereço do cliente.  
 *     responses:
 *       201:
 *         description: Cliente cadastrado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               nome: nome do usuario
 *               email: email@email.com
 *               cpf: xxxxxxxxxxx    
 *       400:
 *         description: Parâmetros de entrada inválidos ou usuário já existente.
 *       500:
 *         description: Erro interno do servidor.
 */
