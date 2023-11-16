/**
 * @swagger
 * /pedido:
 *    get:
 *      tags:
 *        - Pedidos
 *      summary: Listar pedidos com ou sem filtro de cliente.
 *      description: Retorna uma lista de pedidos, podendo ser filtrados por cliente ou listando todos os pedidos de todos os clientes.
 *      parameters:
 *        - in: query
 *          name: cliente_id
 *          schema:
 *            type: integer
 *          description: ID do cliente para filtrar os pedidos (opcional).
 *      responses:
 *        200:
 *          description: Sucesso. Retorna a lista dos pedidos.
 *          content:
 *            application/json:
 *              schema:
 *               type: object
 *               properties:
 *                 pedidos:
 *                     type: array
 *                     items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: integer
 *                          example: 1
 *                        cliente_id:
 *                          type: integer
 *                          example: 1
 *                        observacao:
 *                          type: string
 *                          example: Lorem Ipsum
 *                        valor_total:
 *                          type: integer
 *                          example: 9999
 *                 pedido_produtos:
 *                     type: array
 *                     items:
 *                        type: object
 *                        properties:
 *                          id:
 *                            type: integer
 *                            example: 1
 *                          pedido_id:
 *                            type: integer
 *                            example: 1
 *                          produto_id:
 *                            type: integer
 *                            example: 1
 *                          quantidade_produto:
 *                            type: integer
 *                            example: 1
 *                          valor_produto:
 *                            type: integer
 *                            example: 9999
 *        404:
 *          description: Cliente não encontrado, Não há pedidos para o cliente ou Nenhum pedido encontrado
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  mensagem:
 *                    type: string
 *                    example: Não encontrado.
 *        500:
 *          description: Erro interno do servidor.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  mensagem:
 *                    type: string
 *                    example: Erro interno do servidor.
 */