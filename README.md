# ConectHub - CRUD de Clientes e Contatos

Bem-vindo à aplicação ContactHub, responsável por fornecer operações CRUD completas para clientes e contatos associados a esses clientes.

## Visão Geral

Esta aplicação permite a gestão completa de clientes e contatos associados. As operações suportadas incluem:

- **C**reate: Criar um novo cliente ou contato.
- **R**ead: Recuperar informações sobre clientes ou contatos.
- **U**pdate: Atualizar informações de clientes ou contatos existentes.
- **D**elete: Excluir clientes ou contatos.

## Como Rodar a API

**É preciso criar localmente um banco de dados para se conectar a API.

Siga estes passos para configurar e executar a API localmente:

1. **Clone o repositório**
2. **instale as dependecias rodando o comando npm install em seu terminal**
3. **Copie o arquivo .env.example para um novo arquivo chamado .env.**
4. **Abra o arquivo .env e ajuste as variáveis conforme necessário**
5. ** Rode o comando npm run typeorm migration:generate src/migrations/initialMigration -- -d src/data-source no seu terminal para gerar a migração das tabelas.**
6. ** Rode o comando npm run typeorm migration:run -- -d src/data-source no seu terminal para rodar a migração das tabelas.**
7. **Rode o Comando para Desenvolvimento npm run dev no seu terminal**.
8. **Se tudo estiver configurado corretamente, você verá a seguinte mensagem no seu terminal:**<br>
   Server is running<br>
   Server is running on port (número)<br>

## Consulte aqui a documentação:
- [Documentação](https://api-doc-nu.vercel.app/)
