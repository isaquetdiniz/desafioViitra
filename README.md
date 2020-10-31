# Desafio Viitra
Repositório contendo o desafio proposto pela Viitra para uma oportunidade de estágio

## O Desafio
É construir um CRUD (Create, Read, Update, Delete) utilizanndo MYSQL como banco de dados, junto à uma interface (Front) integrada para a visualização e manipulação desses dados.

## Minhas Escolhas
Para o desafio, escolhi construir o back utilizando Node (Express, Typescript, TypeORM), com o Bando de Dados rodando através do Docker, e o front com React.js.

## O Resultado
O projeto consegue realizar as operações básicas e dar o feedback para o usuário, mas possui alguns pontos de melhoria importantes:
* Validação do CPF
* Validação do CEP
* Formatação da Data (Inserir a data no Modal de Edição)
* Design e UX
* Mensagens e Feedbacks de Erro

## Como rodar o projeto?
É possível que você tenha uma melhor experiência caso esteja utilizando Linux.

### O primeiro passo é rodar o docker
1. Se você não tem o docker instalado, pode seguir a instalação por [aqui](https://docs.docker.com/get-docker/).
2. Agora, em seu terminal rode: ```sudo docker pull mysql:5.6``` para baixar uma nova imagem docker mysql (utilizei a versão 5.6 por perceber alguns problemas de autenticação com a versão mais recente)
3. Após isso, é possível iniciar o container com ```sudo docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=docker mysql:5.6```
4. Com o container rodando, abra um novo terminal e digite ```sudo docker ps``` para listá-lo e copie o seu **CONTAINER ID**.
5. Agora, vamos acessá-lo usando ```sudo docker exec -it <CONTAINER ID> bash```
6. Dentro do nosso container, é só acessar o mysql com ```mysql -u root -p```
7. Ele vai pedir a senha, é só digitar a MYSQL_ROOT_PASSWORD (que no nosso caso foi 'docker') e apertar enter
8. Agora, criaremos nosso database com ```create database viitra;``` e apertar enter
9. Tudo certo! Podemos sair digitando ```exit``` para sair do mysql, e depois ```exit``` para sair do bash do container

### Com o docker e o banco de dados criado
1. Vamos configurar o **.env** para poder rodar o nosso server. 
2. Entre na pasta do server, crie um arquivo .env com:
```
PORT=3001

DATABASE_TYPE=mysql
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=docker
DATABASE_DB=viitra
```
3. Agora instale as dependências com ```yarn install```
4. Antes de rodar o server, precisamos rodar as migrations (que irão criar as tabelas do nosso database), para isso rode ```yarn typeorm migration:run```
5. Após isso, podemos rodar o nosso server com ```yarn dev```

### Com o server configurado e rodando
1. É a hora de rodar o nosso client!!! :)
2. Para isso, navegue até o client e rode ```yarn install```
3. Se ocorrer erro por causa da versão do Node, é possível resolver com (e repetir o passo 2):
```
sudo npm i -g n
sudo n 14
```
4. Após a instalação, é só rodar ```yarn start```
5. O client estará rodando na ```localhost:3001```
