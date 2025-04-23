import { AuthModel } from "../models/authModel.js";
import { AuthView } from "../views/authView.js";
import pug from 'pug';

export const AuthController = {
    login: async (req, res) => {
        try {
            res.render("login.pug");
            console.log(req.body);
            
            //if (!AuthModel.login(req.body)) {
            //    res.json({succes: false})
            //    return new Error("unable to connect");
            //}
            //res.json({succes: true});
        } catch (error) {
            console.error(error);
        }
    }
}