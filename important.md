#### Paquetes
- yarn add express mysql2 reflect-metadata uuid
- yarn add typeorm@0.2.45
- yarn add @types/express @types/nodemon nodemon ts-node-dev typescript -D
- yarn add bcryptjs
- yarn add tsconfig-paths

#### Comandos
- yarn install
- yarn tsc --init
- yarn dev
- yarn typeorm migration:create -n CreateRoles
- yarn typeorm migration:create -n CreateUsers
- yarn typeorm migration:create -n CreateStatus
- yarn typeorm migration:create -n CreateTickets
- yarn typeorm migration:create -n CreateRolesSeeder
- yarn typeorm migration:create -n CreateUsersSeeder
- yarn typeorm migration:create -n CreateStatusSeeder
- yarn typeorm migration:show
- yarn typeorm migration:run
- yarn typeorm migration:revert