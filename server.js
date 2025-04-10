import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { user } from './src/routes/userRoute.js';
import { posts } from './src/routes/postRoute.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(user);
app.use(posts);

app.set('views', './src/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index',  { title: 'Hey', message: 'Hello there!' });
})

app.listen(process.env.PORT_SERVER, () => {
    console.log(`Server running on http://localhost:${process.env.PORT_SERVER}`);
});