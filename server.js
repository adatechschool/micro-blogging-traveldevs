import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { login } from './src/routes/loginRoute.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
<<<<<<< HEAD
app.use(login);
=======

console.log(prisma);

//const newUser = await prisma.users.create({
//    data: {
//        username: 'gkrjgkjre',
//        email: 'test@test.com',
//        password: '123456',
//        profile_picture: "test.com" 
//    }
//})

//const { postInscription }  = require ("./src/model/inscription")
app.post("/signup", async(req, res) => {
    const { username, email, password } = req.body;
    console.log(username)
    const result = await prisma.users.create ({
        data: {
            username,
            email,
            password, 
        }, 
    })
    res.json(result)
})
//app.post("/signup", postInscription)
>>>>>>> f5b8142 (add post inscription)

app.listen(process.env.PORT_SERVER, () => {
    console.log(`Server running on http://localhost:${process.env.PORT_SERVER}`);
});