# GraphQL Server Using Express-GraphQL & MongoDB

## Dependencies
- Node: 14.16.0
- MongoDB: 4.4.5

## Setup
- Install node dependencies
```
npm install
```
- Setup docker network (setup once) to run locally
```
docker network create network
```
- Create mongodb and mongo-express
```
docker-compose up -d
```
- To clean up database setup
```
docker-compose down
```
- Check `docker-compose.yml` for detail configurations

## Running locally
- Start service
```
npm start
```
- View GraphiQL
```
open browser at http://localhost:8080/graphql
```
- View mongodb express
```
open browser at http://localhost:8081
```

