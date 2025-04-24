import { PasswordUtils } from '../utils/passwordHasing.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ["query"]
});


export const UserModel = {
    find: async (data) => {
        try {
            const user = await prisma.users.findFirst({
                where: {
                    OR: [
                        { email: data.email },
                        { username: data.username }
                    ]
                }
            }); 
            if (!user) {
                return false
            } else {
                return true
            }
        } catch(error) {
            console.error(error)
        }
    },

    findById: async (id) => {
        try {
            const result = await prisma.users.findUnique({
                where: {
                    id: id
                }
            });

            if (!result) {
                throw new Error("User not found");
            }

            return result;

        } catch (error) {
            throw error;
        }
    },

    findAll: async () => {
        try {
            const result = await prisma.users.findMany();

            if (!result){
                throw new Error("Users not found");
            }

            return result;

        } catch (error) {
            throw error;
        }
    },

    create: async (data) => {
        try {
            const hashedPassword = await PasswordUtils.hashPassword(data.password);
            const result = await prisma.users.create({
                data: {
                    username: data.username,
                    email: data.email,
                    password: hashedPassword
                    //password: data.password
                }
            });

            if (!result) {
                throw new Error("Unable to create user");
            }

            return result;
        } catch (error) {
            throw error;
        }
    },

    update: async (data, id) => {
        try {
            const hashedPassword = await PasswordUtils.hashPassword(data.password);
            const result = await prisma.users.update({
                where: {
                    id: id
                },
                data: {
                    username: data.username,
                    email: data.email,
                    password: hashedPassword
                }
            });

            if (!result) {
                throw new Error("Update failed!");
            }

        } catch (error) {
            throw error;
        }
    },

    delete: async (id) => {
        try {            
            const result = await prisma.users.delete({
                where: {
                    id: id
                }
            });
            
            if (!query) {
                throw new Error("Unable to delete user");
            }

            return result;

        } catch (error) {
            throw error;
        }
    },
};
