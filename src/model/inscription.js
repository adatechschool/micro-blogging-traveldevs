import { PrismaClient } from '@prisma/client';
const bcrypt = require("bcryptjs");
//const express = require("express") 

const prisma = new PrismaClient();

//const router = express.Router();

const postInscription = async(req, res)=>{
    const { username, email, password } = req.body;
    const result = await prisma.users.create({
        data: {
            username,
            email,
            password, 
        },
    })
    res.json(result.rows[0])
}

module.exports = {postInscription};