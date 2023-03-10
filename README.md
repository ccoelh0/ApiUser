# API USER
Test para aplicar funcionalidades de registro, login y listado de usuarios

##  Tecnologias utilizdadas: 

| Funcionalidad | Tecnologias |
| ------ | ------ |
| Desarrollo | Nodejs, Typescript y Express |
| Base de datos  | Mongo |
| Entorno | dotenv |
| Validaciones | Bcrypt, jsonwebtoken y passport |
| Testing | Mocha, chai y supertest |

## Instalacion local: 

```sh
Download zip
npm install
npm run dev // to run with nodemon

sino: 
npm run build
npm start
```

## Tener en cuenta
- Los test estan programados para correrse de forma local con el comando 'npm run test'
- El deploy se realizo en Vercel: https://api-user-flax.vercel.app/ -> aunque es preferible correr el proyecto de forma local dado que se hizo
un mini frontend para hacer mas facil probar las funcionalidades (el cual por problemas con vercel no pude desplegar bien)

## Endpoints: 
- '/index' -> trae un html para probar funcionalidades
- '/api/register' -> registro de usuarios
- '/api/login' -> login de usuarios
- /api/users' -> trae la lista de usuarios y/o filtra por usuario

## Autor: 
```sh
Agustin Coelho || https://www.linkedin.com/in/agustin-coelho-2a5767175/ 
Mail || coelhoagustin1@gmail.com
```
