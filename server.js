import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { hashSync } from "bcrypt";

export const prisma = new PrismaClient();
import { login } from './src/routes/loginRoute.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(login);

// const newUser = await prisma.users.create({
//     data: {
//         username: 'Majda',
//         email: 'majda@test.com',
//         password: 'olalala',
//         profile_picture: "oui" 
//     }
// })
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

// console.log(newUser)

// app.post('/signup', async (req, res) => {
//     const {username, email, password} = req.body;

//     let user = await prisma.users.findFirst({where: {email}})
//     if (user){
//         throw Error ('L\'utilisateur existe déja')
//     }
//     user = await prisma.users.create({
//         data:{
//             username,
//             email,
//             password:hashSync(password,10)
//         }
//     })
//     res.json(user)
// })

app.listen(process.env.PORT_SERVER, () => {
    console.log(`Server running on http://localhost:${process.env.PORT_SERVER}`);
});