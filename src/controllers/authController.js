import { AuthModel } from "../models/authModel.js";
<<<<<<< HEAD
export const AuthController = {
    login: async (req, res) => {
        try {
            console.log(req.body);
            
            if (!AuthModel.login(req.body)) {
                res.json({succes: false})
                return new Error("Fatale error");
            } else {
                res.json({succes: true});
            }
        } catch (error) {
            console.error(error);
        }
    },
=======

export const AuthController = {
    login: async (req, res) => {
        try {
            res.json(await AuthModel.login(req.body));
        } catch (error) {
            console.error(error);
        }            
    },

>>>>>>> main
    displayMainPage: async (req, res)=> {
        res.render("login.pug");
    }
}