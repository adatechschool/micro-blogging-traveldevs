import { LoginModel } from "../model/loginModel.js";

export const LoginController = {
    getlogin: async (data) => {
        try {
            return await LoginModel.login(data);
        } catch (error) {
            console.error(error);
        }
    }
}