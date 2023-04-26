# Projeto Blogs Api

Este projeto foi desenvolvido no módulo de Back-end do curso da Trybe.

O projeto consiste em uma API para produção de conteúdo em um blog fictício. A aplicação é feita em Node.js, utilizando o pacote Sequelize para criação de banco de dados e um CRUD dos posts, os endpoints da API seguem os princípios REST.

## Tecnologias usadas 🛠

- JavaScript ES6
- Node.js

### Ferramentas:

- Express.js
- Postman
- Sequelize
- Docker

## Executando aplicação ⚡️

### Utilizando docker:

<i>Roda os serviços Node e db:</i>

```
docker-compose up -d --build
```

<i>Acesso ao terminal interativo do container:</i>

```
docker exec -it blogs_api bash
```

<i>Instala as dependências (dentro do container):</i>

```
npm install
```

### Sem Docker:

<i>Instala as dependências:</i>

```
npm install
```

## Autor 👥

<a href="https://www.linkedin.com/in/marques-bruno/">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://github.com/marqsbruno">
    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
  </a>

<i>Os arquivos "docker-compose.yml", ".sequelizerc" e "config.js" são de autoria da escola [Trybe](https://github.com/betrybe)</i>
