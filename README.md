# test-FullstackJSJunior:

Esta proposta de projeto é uma avaliação para a função citada no título para a empresa Contele.

### Objetivo do projeto:

Este projeto visa armazenar dados do usuário, como email e senha, além de poder buscar estas informações contidas em um banco de dados, alterar e removê-las do banco. Cada usuário possuirá um ID único, podendo através desse, alterar e remover especificamente o usuário. Somente poderá acessar a API, o usuário que receber o token gerado no login e validado o mesmo.

### Stacks Utilizadas:

- Javascript
- NodeJS
- Express
- PG (PostgreSQL)
- SwaggerUIExpress

### Banco de Dados Utilizados:

- PostgreSQL

### Documentação e Testes:

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

- SwaggerJSDoc:

```npm install swagger-jsdoc``` ou
```yarn add swagger-jsdoc```

### Como utilizar:

Após a instalação das dependências acima, basta entrar no terminal e digitar o seguinte comando:

```npm start``` ou ```yarn start```

Utilize o link abaixo para abrir o Swagger e poder acessar a API

```http://localhost:4000/api/v1/docs```

Dentro da API, existem 9 rotas e 4 endpoints, que são:
  - POST/api/v1/users/login
  - POST/api/v1/users/login/validate
  - GET/api/v1/teste
  - GET/api/v1/users
  - GET/api/v1/users/:uuid
  - POST/api/v1/users
  - PUT/api/v1/users/:uuid
  - DELETE/api/v1/users
  - DELETE/api/v1/users/:uuid

### Função de cada rota:

#### POST/api/v1/users/login:

Esta rota é a porta de entrada para a API.
Nela você insere a autorização, feito em base64 para receber um token.

#### POST/api/v1/users/login/validate:

Esta rota, serve para validar o token gerado pela rota anterior, assim confirmando a identidade de quem esta acessando a API.

#### GET/api/v1/teste:

Como próprio nome diz, apenas mostra se a API está funcionando

#### GET/api/v1/users:

Esta rota recupera a lista de todos os dados dos usuários cadastrados.

#### GET/api/v1/users/:uuid:

Assim como a anterior, ela nos traz os dados de um único usuário, através de seu identificador (UUID)

#### POST/api/v1/users:

Esta rota permite a criação de um novo usuário no banco de dados. Após criado, ele gera um UUID, que pode ser utilizado na rota GET, PUT ou DELETE.

#### PUT/api/v1/users/:uuid:

Esta rota, através de um uuid, permite alterar os dados do usuário que estão guardados no banco de dados.

#### DELETE/api/v1/users:

Esta rota remove todos os dados dos usuários listados no banco de dados.

#### DELETE/api/v1/users/:uuid:

Esta rota remove apenas um único usuário, através de seu uuid

### Observações:

- Foi utilizado um middleware para tratamento de erros para as requisições.
- O error handler é genérico, mas trata todos erros da API.
- Todo o código desenvolvido é JS puro.

### Contato:

- Linkedin: ```https://www.linkedin.com/in/marcos-melo-ferreira/```
- Outlook: ```marcos_m_ferreira@outlook.com```
