# Integração React e NextJs

### Autor
[Robson Fernando](https://www.linkedin.com/in/robsonffdossantos/)

### Sobre o projeto
O projeto foi feito com o objetivo de integrar uma api feita com NestJs ao React com typescript. Esse repositório é o back-end da aplicação que funciona com o front-end feito em ReactJs e que pode ser encontrado [nesse link](https://github.com/robsonffsantos/react-car-shop). 

### Ferramentas
Nesse projeto utilizei as seguintes ferramentas:

* NextJs
* Javascript
* Typescript
* mySql
* JWT
* Typeorm
* Swagger
* Docker

### Como rodar o projeto

* Para rodar o back-end
Será necessário ter o [gitBash](https://git-scm.com/downloads) instalado na sua máquina. Abra no local onde você deseja salvar o repositório e rode o comando git clone https://github.com/robsonffsantos/nest-car-shop.git

Após o download do repositório, abra um editor de código (vsCode, por exemplo) e navegue até a pasta src. Faça a instação das ferramentas necessárias com npm install ou yarn add. Após a instalação finalizar, digite o comando npm run start ou yarn start para obter um endereço local e poder visualizar na sua API Client de preferência. Recomendo utilizar o [Postman](https://www.postman.com/downloads/) ou o [Insomnia](https://insomnia.rest/download).

* Para saber quais rotas testar
Basta acessar [este endereço](http://localhost:3000/api#/) para ter acesso a todas as rotas disponíveis. O endereço só funcionará se o back-end estiver rodando na sua máquina.

* Para acessar o banco de dados
Você deverá ter o [docker](https://docs.docker.com/desktop/install/windows-install/) instalado na sua máquina, além de ter um workbench como o [mySql](https://dev.mysql.com/downloads/workbench/) na sua máquina. Pelo editor de código execute o comando <b>docker-compose up</b> e aguarde a instalação no docker.

No banco de dados, procure a opção de adicionar uma nova conexão e preencha os seguintes itens:

* host: 'localhost',
* port: 3099,
* username: 'carShop',
* password: 'carShop',
* database: 'carShop'
