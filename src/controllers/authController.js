import { AuthModel } from "../models/authModel.js";
import { isEmail } from "../utils/authUtil.js";
import { PostModel } from "../models/postModel.js";

export const AuthController = {
    login: async (req, res) => {
        try {
            const result = await AuthModel.login(isEmail(req.body));
            if (!result) {
                res.render("login", {
                    message: result.message
                });
            } else {
                res.redirect("/posts");
                // const data = await PostModel.findAll();
                // res.render('post');
            }            
            

        } catch (error) {
            console.error(error);
        }            
    },
    
    displayMainPage: async (req, res)=> {
        res.render("login.pug");
    }
}