import { AuthController } from '../controllers/authController.js';

import express from 'express';

const router = express.Router();

router.get('/login', AuthController.displayMainPage);
router.post('/login', AuthController.login);

export { router as auth };