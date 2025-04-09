import { PrismaClient } from '@prisma/client';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { hashSync } from "bcrypt";

export const prisma = new PrismaClient();
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

// const newUser = await prisma.users.create({
//     data: {
//         username: 'Majda',
//         email: 'majda@test.com',
//         password: 'olalala',
//         profile_picture: "oui" 
//     }
// })

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