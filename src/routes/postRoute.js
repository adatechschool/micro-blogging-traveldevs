import express from 'express';
import prisma from '../utils/prismaClient.js';
const router = express.Router();

import { PostController } from '../controller/postController.js';

router.get('/post', async(req,res) => {
    try {
        const result = PostController.getAllPosts()
        res.json(result)
    } catch (error) {
        
    }
})
export { router as post }

