import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { user } from './src/routes/userRoute.js';
import { posts } from './src/routes/postRoute.js';
import { auth } from './src/routes/authRoute.js';

const app = express();
dotenv.config();

app.set('views', './src/views/pages');
app.set('view engine', 'pug');

app.use(express.json());
app.use(cors());

app.use(user);
app.use(posts);
app.use(auth);

app.listen(process.env.PORT_SERVER, () => {
    console.log(`Server running on http://localhost:${process.env.PORT_SERVER}`);
});