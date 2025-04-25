import { UserController } from '../controllers/userController.js';
import express from 'express';
const router = express.Router();

router.get('/users', UserController.getAllUsers);
router.put('/users/update', UserController.updateUser);
router.delete('/users/delete', UserController.deleteUser);

export { router as user };