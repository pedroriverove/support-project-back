import '@/database';
import 'reflect-metadata';
import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import {routes} from '@/routes';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use(cors());
app.use(helmet());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(routes)

app.listen(port, () => console.log("\u{1F525} Server is running"));
