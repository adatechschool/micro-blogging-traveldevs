import { AuthModel } from "../models/authModel.js";
import { isEmail } from "../utils/authUtil.js";

export const AuthController = {
    login: async (req, res) => {
        try {
            const result = await AuthModel.login(isEmail(req.body));            
            res.render("login", {
                message: result.message
            });

        } catch (error) {
            console.error(error);
        }            
    },
    
    displayMainPage: async (req, res)=> {
        res.render("login.pug");
    },
    
    verify: async (param) => {

    }
}