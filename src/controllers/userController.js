import { UserModel } from "../models/userModel.js";

export const UserController = {
    getUserById: async (id) => {
        try {            
            return await UserModel.findById(id);
        } catch (error) {
            console.error(error);
        }
    },

    getAllUsers: async (req, res) => {
        try {
            if (req.query.id) {
                return res.json(await UserController.getUserById(parseInt(req.query.id)));
            } else {
                return res.json(await UserModel.findAll());
            }
        } catch (error) {
            console.error(error);
        }
    },

    createUser: async (req, res) => {
        try {
            return res.json(await UserModel.create(req,body));
        } catch (error) {
            console.error(error);
        }
    },

    updateUser: async (req, res) => {
        try {
            return res.json(await UserModel.update(req.body, parseInt(req.body.id)))
        } catch (error) {
            console.error(error);
        }
    },
    
    deleteUser: async (req, res) => {
        try {
            return res.json(await UserModel.delete(parseInt(req.query.id)));
        } catch (error) {
            console.error(error);
        }
    }
}