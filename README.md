Introdução O sistema Los Gourmet é uma solução digital para gerenciar pedidos de delivery com funcionalidades específicas para três tipos de usuários: Gerente, Cliente e Entregador. Ele permite o controle eficiente de produtos, pedidos e usuários, além de oferecer uma experiência simples e intuitiva para o cliente acompanhar seu pedido até a entrega.

Funcionalidades por Perfil
1.1 Gerente O gerente tem acesso às seguintes funcionalidades: • Cadastro de pratos e produtos: Adicionar novos itens ao catálogo de produtos disponíveis. • Gerenciamento de categorias: Criar e editar categorias para organizar os produtos. • Cadastro de usuários: Adicionar novos gerentes, clientes ou entregadores ao sistema. • Gerenciamento de pedidos: Atualizar o status dos pedidos.

1.2 Cliente O cliente pode realizar as seguintes ações: • Visualização do catálogo de produtos: Navegar pelos produtos disponíveis e selecionar os desejados. • Carrinho de compras: Adicionar, remover ou ajustar a quantidade de produtos. • Finalizar pedido: Informar nome, telefone, endereço e forma de pagamento (Cartão de crédito/débito ou pagamento na entrega através de dinheiro). • Acompanhamento de pedido: Visualizar o status atualizado do pedido e seus detalhes.

1.3 Entregador O entregador pode: • Alterar status do pedido: Marcar pedidos como entregues.

Fluxo de Uso
2.1 Acesso ao Sistema

• Acesse a tela inicial de login. • Insira suas credenciais (e-mail e senha). • Após o login, você será redirecionado para a interface correspondente ao seu perfil (Gerente, Cliente ou Entregador).

2.2 Primeiro Acesso (Administrador Inicial) • Localize o arquivo de configuração no banco de dados com o código especial para criar o primeiro gerente. • Cadastre o gerente inicial no sistema. • A partir deste gerente, crie outros usuários e gerencie o sistema.

2.3 Gerenciamento de Produtos (Gerente)

Acesse a aba Pratos ou Produtos.
Clique em Adicionar para criar um novo item.
Preencha as informações necessárias, como nome, descrição, categoria e preço.
Salve as alterações.
2.4 Finalização de Pedido (Cliente)

Adicione produtos ao carrinho.
Acesse o carrinho para revisar os itens.
Insira seus dados de contato e escolha a forma de pagamento.
Confirme o pedido.
Acompanhe o status do pedido na tela correspondente.
2.5 Entrega (Entregador)

Acesse a lista de pedidos atribuídos.
Selecione o pedido para entrega.
Atualize o status para entregue ao finalizar a entrega.
Requisitos Técnicos
3.1 Backend • Linguagem: Java • Frameworks: Spring Boot • Banco de Dados: MySQL

3.2 Frontend • Framework: Angular • Linguagens: TypeScript, HTML e CSS