# test-FullstackJSJunior:

Esta proposta de projeto é uma avaliação para a função citada no título para a empresa Contele.

### Objetivo do projeto:

Este projeto visa armazenar dados do usuário, como email e senha, além de poder buscar estas informações contidas em um banco de dados, alterar e removê-las do banco. Cada usuário possuirá um ID único, podendo através desse, alterar e remover especificamente o usuário.

### Stacks Utilizadas:

- Javascript
- NodeJS
- Express
- PG (PostgreSQL)
- SwaggerUIExpress

### Banco de Dados Utilizados:

- PostgreSQL

### Documentação:

- Swagger

### Instalação:

- Instalação do node_modules:

```npm install``` ou
```yarn```

- Express:

```npm install express``` ou
```yarn add express```

- Nodemon:

```npm install nodemon``` ou
```yarn add nodemon```

- PostgreSQL (PG):

```npm install pg``` ou
```yarn add pg```

- SwaggerUIExpress:

```npm install swagger-ui-express``` ou
```yarn add swagger-ui-express```

### Como utilizar:

Para os testes das rotas da API, recomendo que utilize o simulador de requisições Insomnia.

Dentro da API, existem 7 rotas e 4 endpoints, que são:
  - GET/teste
  - GET/api/v1/users
  - GET/api/v1/users/:uuid
  - POST/api/v1/users
  - PUT/api/v1/users/:uuid
  - DELETE/api/v1/users
  - DELETE/api/v1/users/:uuid

### Função de cada rota:

#### GET/teste:

Como próprio nome diz, apenas mostra se a API está funcionando

#### GET/api/v1/users:

Esta rota recupera a lista de todos os dados dos usuários cadastrados.

#### GET/api/v1/users/:uuid:

Assim como a anterior, ela nos traz os dados de um único usuário, através de seu identificador (UUID)

#### POST/api/v1/users:

Esta rota permite a criação de um novo usuário no banco de dados. Após criado, ele gera um UUID, que pode ser utilizado na rota GET, PUT ou DELETE.

### PUT/api/v1/users/:uuid:

Esta rota, através de um uuid, permite alterar os dados do usuário que estão guardados no banco de dados.

#### DELETE/api/v1/users:

Esta rota remove todos os dados dos usuários listados no banco de dados.

#### DELETE/api/v1/users/:uuid:

Esta rota remove apenas um único usuário, através de seu uuid

### Observações:

- Foi utilizado um middleware para tratamento de erros para as requisições.
- O error handler é genérico, mas trata os erros da API.
- Todo o código desenvolvido é JS puro, contudo, boas práticas foram impregados para melhor organização do código.