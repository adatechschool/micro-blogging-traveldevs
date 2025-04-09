import { UserController } from '../controller/userController.js';
import express from 'express';
const router = express.Router();

router.get('/users', async (req, res) => {
    try {
        if (req.query.id) {
            res.json(await UserController.getUserById(req.query.id));
        } else {
            res.json(await UserController.getAllusers());
        }
    } catch (error) {
        console.error(error);
    }
});

router.post("/users/create", async(req, res) => {
    try {
        res.json(await UserController.createUser(req.body));
    } catch (error) {
        console.error(error);
    }
});

router.post('/users/login', async (req, res) => {
    try {
        res.json(await UserController.login(req.body));
    } catch (error) {
        console.error(error);
    }
});

router.put('/users/update', async (req, res) => {
    try {
        res.json(await UserController.updateUser(req.body));
    } catch (error) {
        console.error(error);
    }
});

router.delete('/users/delete', async (req, res) => {
    try {
        res.json(await UserController.deleteUser(req.query.id));
    } catch (error) {
        console.error(error);
    }
});

export { router as user };