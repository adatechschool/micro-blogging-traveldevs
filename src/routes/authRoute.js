import { AuthController } from '../controllers/authController.js';
import { UserController } from '../controllers/userController.js';

import express from 'express';

const router = express.Router();

router.get('/', AuthController.displayMainPage);
router.post('/login', AuthController.login);

router.get('/signup', UserController.displaySignUpPage);
router.post('/signup1', UserController.createUser);

export { router as auth };