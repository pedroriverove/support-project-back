# Node | Express | TypeScript

Backend project with JWT authentication to create, modify and delete tickets assigned to different developers.

## Used technology

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [MySQL2](https://www.npmjs.com/package/mysql2/)
- [Typeorm](https://typeorm.io/#/)
- [Nodemon](https://www.npmjs.com/package/nodemon/)
- [JWT](https://github.com/auth0/node-jsonwebtoken/)

## Requirements

- [Node.js](https://nodejs.org/) v16 or newer, [Yarn](https://yarnpkg.com/) package manager
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/) v8.0 or newer

## Getting Started

1. Clone repository
```
$ git clone https://github.com/pedroriverove/support-project-back.git
```
2. Change into the working directory
```
$ cd support-project-back
```
3. Copy `.env.example` to `.env` and modify according to your environment
```
$ cp .env.example .env
```
4. Install project dependencies
```
$ yarn install
```
5. Run these commands to create the tables within the defined database and populate seed data
```
$ yarn typeorm migration:run
```
6. Finally, launch the app
```
$ yarn dev
```

## Related Projects

- [Support Project Front](https://github.com/pedroriverove/support-project-front) — project template, pre-configured with React and Typescript
