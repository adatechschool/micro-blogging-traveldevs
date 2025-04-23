import { AuthController } from '../controllers/authController.js';
import express, { Router } from 'express';

const router = express.Router();

router.get('/home', AuthController.displayMainPage);
router.post('/login', AuthController.login);

export { router as auth };