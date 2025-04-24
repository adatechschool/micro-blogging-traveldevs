import { AuthModel } from "../models/authModel.js";
import { isEmail } from "../utils/authUtil.js";

export const AuthController = {
    login: async (req, res) => {
        try {
            res.json(await AuthModel.login(isEmail(req.body)));
        } catch (error) {
            console.error(error);
        }            
    },

    displayMainPage: async (req, res)=> {
        res.render("login.pug");
    }
}