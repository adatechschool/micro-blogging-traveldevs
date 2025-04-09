import { UserModel } from "../model/userModel.js";

export const UserController = {
    login: async (data) => {
        try {
            return await UserModel.login(data);
        } catch (error) {
            console.error(error);
        }
    },
    getUserById: async (id) => {
        try {
            return await UserModel.findById(id);
        } catch (error) {
            console.error(error);
        }
    },

    getAllusers: async () => {
        try {
            return await UserModel.findAll();
        } catch (error) {
            console.error(error);
        }
    },

    createUser: async (data) => {
        try {
            return await UserModel.create(data);
        } catch (error) {
            console.error(error);
        }
    },

    updateUser: async (data) => {
        try {
            return await UserModel.update(data)
        } catch (error) {
            console.error(error);
        }
    },
    
    deleteUser: async (id) => {
        try {
            return await UserModel.delete(id);
        } catch (error) {
            console.error(error);
        }
    }
}