import { LoginController } from '../controller/loginController.js';
import express from 'express';
const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const message = await LoginController.getlogin(req.body);
        
        if (!message.success) {
            res.json(message);
        } else {
            res.json(message);
        }

    } catch (error) {
        console.error(error);
    }
});

export { router as login };