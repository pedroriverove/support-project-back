import '@/database';
import 'reflect-metadata';
import express from 'express';
import { routes } from '@/routes';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

app.use(routes)

app.listen(port, () => console.log("\u{1F525} Server is running"));
