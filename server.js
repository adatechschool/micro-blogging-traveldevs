import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { hashSync } from "bcrypt";

import { user } from './src/routes/userRoute.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(user);

app.listen(process.env.PORT_SERVER, () => {
    console.log(`Server running on http://localhost:${process.env.PORT_SERVER}`);
});