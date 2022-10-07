# bourdain_pizza

![image](https://user-images.githubusercontent.com/37468432/194673469-dc505ad5-2da0-421c-867c-d9ff29cb3d80.png)

#### Stack:

Backend:
- Node with Express 
- MySQL 
- TypeORM

Frontend:
- React
- MaterialUI

## Prerequisites

- npm
- node
- docker
- docker-compose

### How to run API

1 - `cd server`

2 - `npm i`

3 - `docker-compose up -d`

give it like 30 seconds to 1 minute for the database to init

4 - `npm run migration:run`

5 - `npm run dev`

And the server wil be running on port 3000


### How to run APP

1 - `cd client`

2 - `npm i` 

3 - `npm run start`

enjoy
