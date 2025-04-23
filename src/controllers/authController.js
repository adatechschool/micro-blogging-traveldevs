import { AuthModel } from "../models/authModel.js";

export const AuthController = {
    login: async (req, res) => {
        try {
            res.json(await AuthModel.login(req.body));
        } catch (error) {
            console.error(error);
        }            
    },

    displayMainPage: async (req, res)=> {
        res.render("login.pug");
    }
}