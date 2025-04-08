import { PrismaClient } from '@prisma/client';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

// const newUser = await prisma.users.create({
//     data: {
//         username: 'AZlice',
//         email: 'test@test.com',
//         password: '123456',
//         profile_picture: "test.com" 
//     }
// })

app.listen(process.env.PORT_SERVER, () => {
    console.log(`Server running on http://localhost:${process.env.PORT_SERVER}`);
});