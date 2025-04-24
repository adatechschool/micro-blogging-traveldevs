import { UserController } from '../controllers/userController.js';
import express from 'express';
const router = express.Router();

router.get('/users', UserController.getAllUsers);
router.get('/signup', UserController.displaySignUpPage);
router.post('/signup1', UserController.createUser)
router.put('/users/update', UserController.updateUser);
router.delete('/users/delete', UserController.deleteUser);

export { router as user };