# DevRadar
Implementação de backend do projeto da 10ª semana OmniStack da RocketSeat

A aplicação de backend conta com a comunicação com o banco de dados Mongo, rodando nesse exemplo em um container Docker.

Para rodar o banco de dados utilizando Docker é necessário ter o Docker e o docker-compose previamente instalados em sua máquina.

Na raiz do projeto, rodando o comando a seguir o banco container do banco de dados será iniciado:

```docker
docker-compose up -d
```

Para o funcionamento do backend da aplicação são necessários o Node.js e o yarn instalados em sua máquina.

O seguinte comando inicia a API: 

```bash
  yarn dev
```
