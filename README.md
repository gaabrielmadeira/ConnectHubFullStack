# ConectHub - CRUD de Clientes e Contatos

Bem-vindo à aplicação ContactHub, responsável por fornecer operações CRUD completas para clientes e contatos associados a esses clientes.

## Deploy da aplicação:
https://projeto-full-stack-m6-front-end.vercel.app/

## Visão Geral

Esta aplicação permite a gestão completa de clientes e contatos associados. As operações suportadas incluem:

- **C**reate: Criar um novo cliente ou contato.
- **R**ead: Recuperar informações sobre clientes ou contatos.
- **U**pdate: Atualizar informações de clientes ou contatos existentes.
- **D**elete: Excluir clientes ou contatos.

## Como Rodar a API

Siga estes passos para configurar e executar a API localmente:

1. **Clone o repositório**
2. **Acesse a pasta backend.**
3. **instale as dependecias rodando o comando npm install em seu terminal.**
4. **Crie um arquivo na raiz chamado .env para guardar as variaveis de ambiente.**
5. **Copie o arquivo .env.example para o novo arquivo chamado .env.**
6. **Abra o arquivo .env e ajuste as variáveis conforme necessário para se conectar ao seu banco de dados.**
7. ** Rode o comando npm run typeorm migration:generate src/migrations/initialMigration -- -d src/data-source no seu terminal para gerar a migração das tabelas.**
8. ** Rode o comando npm run typeorm migration:run -- -d src/data-source no seu terminal para rodar a migração das tabelas.**
9. **Rode o Comando para Desenvolvimento npm run dev no seu terminal**.
10. **Se tudo estiver configurado corretamente, você verá a seguinte mensagem no seu terminal:**<br>
   Server is running<br>
   Server is running on port (número)<br>

## Consulte aqui a documentação:
- [Documentação](https://api-doc-nu.vercel.app/)
