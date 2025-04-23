import { AuthModel } from "../models/authModel.js";
export const AuthController = {
    login: async (req, res) => {
        try {
            console.log(req.body);
            
<<<<<<< HEAD
            if (!AuthModel.login(req.body)) {
                res.json({succes: false})
                return new Error("Fatale error");
            } else {
                res.json({succes: true});
            }
=======
            //if (!AuthModel.login(req.body)) {
            //    res.json({succes: false})
            //    return new Error("unable to connect");
            //}
            //res.json({succes: true});
>>>>>>> brancheFontConnexion
        } catch (error) {
            console.error(error);
        }
    },
    displayMainPage: async (req, res)=> {
        res.render("login.pug");
    }
}