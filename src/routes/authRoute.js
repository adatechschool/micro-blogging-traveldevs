import { AuthController } from '../controllers/authController.js';
import express, { Router } from 'express';

const router = express.Router();

router.get('/login', AuthController.login);

export { router as auth };