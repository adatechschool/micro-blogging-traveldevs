import { UserController } from '../controller/userController.js';
import express from 'express';
const router = express.Router();

router.post('/user/login', async (req, res) => {
    try {
        const message = await UserController.login(req.body);
        
        if (!message.success) {
            res.json(message);
        } else {
            res.json(message);
        }

    } catch (error) {
        console.error(error);
    }
});

router.post("/user/signup", async(req, res) => {
    try {
        const message = await UserController.createUser(req.body);
        
        if (!message.success) {
            res.json(message);
        } else {
            res.json(message)
        }

    } catch (error) {
        console.error(error);
    }
});

export { router as user };