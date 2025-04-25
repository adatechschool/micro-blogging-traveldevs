import { AuthModel } from "../models/authModel.js";
import { isEmail } from "../utils/authUtil.js";
import { PostModel } from "../models/postModel.js";

export const AuthController = {
    login: async (req, res) => {
        try {
            const result = await AuthModel.login(isEmail(req.body));
            if (!result.success) {
                res.render("login", {
                    message: result.message
                });
            } else {
                res.redirect("/posts");
            }            
            

        } catch (error) {
            console.error(error);
        }            
    },
    
    displayMainPage: async (req, res)=> {
        res.render("login.pug");
    }
}