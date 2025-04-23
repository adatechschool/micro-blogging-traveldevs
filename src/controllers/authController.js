import { AuthModel } from "../models/authModel.js";

export const AuthController = {
    login: async (req, res) => {
        try {
        console.log(req.body);
        //const result = await AuthModel.login(req.body);

        //if (!result) {
        //    res.json({ success: true });
        //} else {
        //    res.json({ success: false});
        //}
            if (!AuthModel.login(req.body)) {
                res.json({succes: false})
                return new Error("Fatale error");
            } 
             else {
                res.json({succes: true});
            }
        } catch (error) {
            console.error(error);
        }
    },
    displayMainPage: async (req, res)=> {
        res.render("login.pug");
    }
}