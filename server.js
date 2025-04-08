import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { login } from './src/routes/loginRoute.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(login);

app.listen(process.env.PORT_SERVER, () => {
    console.log(`Server running on http://localhost:${process.env.PORT_SERVER}`);
});