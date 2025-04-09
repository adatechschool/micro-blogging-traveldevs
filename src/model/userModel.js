import { PasswordUtils } from '../utils/passwordHasing.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ["query"]
});


export const UserModel = {
    login: async (data) => {
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
                return { success: false, message: "User not found" };
            }
            switch (await PasswordUtils.verifyPassword(data.password, user.password)) {
                case true:
                    return {success: true, message: "Succesfully connected!"};
                case false:
                    return { success: false, message: "Incorrect password"};
            }

        } catch (error) {
            console.error(error);
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
                res.json({success: false, message: "Unable to find user"});
            } else {
                return result;
            }

        } catch (error) {
            console.error(error);
        }
    },

    findAll: async () => {
        try {
            return await prisma.users.findMany();
        } catch (error) {
            console.error(error);
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
                }
            })

            return result;
        } catch (error) {
            console.error(error);
        }
    },

    update: async (data) => {
        try {
            const id = parseInt(data.id)
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
                res.json({success: false, message: ""})
            }
        } catch (error) {
            console.error(error);
        }
    },

    delete: async (userId) => {
        try {            
            const id = parseInt(userId)
            const query = await prisma.users.delete({
                where: {
                    id: id
                }
            });
            
            if (!query) {
                res.json({success: false, message: "Unable to delete user"});
            } else {
                res.json({success: true, message: "User deleted succesfully !"})
            }

        } catch (error) {
            console.error(error);
        }
    },
};
