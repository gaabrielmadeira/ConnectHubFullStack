# ConnectHub - CRUD de Clientes e Contatos

🚀Bem-vindo à aplicação ContactHub, responsável por fornecer operações CRUD completas para clientes e contatos associados a esses clientes.💻✨

## Deploy da aplicação:
https://projeto-full-stack-m6-front-end.vercel.app/

## Visão Geral

Esta aplicação permite a gestão completa de clientes e contatos associados. As operações suportadas incluem:

- **C**reate: Criar um novo cliente ou contato.
- **R**ead: Recuperar informações sobre clientes ou contatos.
- **U**pdate: Atualizar informações de clientes ou contatos existentes.
- **D**elete: Excluir clientes ou contatos.

## Como Rodar a API através do Docker

Siga estes passos para configurar e executar a API localmente:

1 - Configure os arquivos .env na raiz do projeto e na pasta backend da seguinte maneira:
 - Na raiz do projeto crie um arquivo .env e copie o que esta no arquivo .env.example para dentro deste arquivo, faça os mesmo passos para o arquivo dentro da pasta backend
 - Preencha as variáveis de ambiente, sugestão:
 .env da raiz:
     ```
      PGPORT=5432
      PORT=3000

      POSTGRES_USER=postgres
      POSTGRES_DB=connecthub
      POSTGRES_PASSWORD=1234

.env do backend
   ```
      DATABASE_URL=postgres://postgres:1234@db:5432/connecthub
      SECRET_KEY=abdcedahdahskjd
      EXPIRES_IN=1hr
  ```
2 - Execute o comando docker compose up para subir o container.

## Consulte aqui a documentação:
- [Documentação](https://api-doc-nu.vercel.app/)
