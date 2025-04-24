import { UserModel } from "../models/userModel.js";

export const UserController = {
    displaySignUpPage: async(req, res)=>{
        res.render("signup.pug");
    },
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
            const { username, email, password } = req.body;
            console.log(req.body)
            const newUser = await UserModel.create({ username, email, password });
            return res.json(newUser)
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