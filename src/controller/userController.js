import { UserModel } from "../model/userModel.js";

export const UserController = {
    login: async (data) => {
        try {
            return await UserModel.login(data);
        } catch (error) {
            console.error(error);
        }
    },
    getUserById: async () => {},

    getAllusers: async () => {},

    createUser: async (data) => {
        try {
            return await UserModel.create(data);
        } catch (error) {
            console.error(error);
        }
    },

    updateUser: async () => {},
    
    deleteUser: async () => {}
}