import { user } from '../routes/userRoute.js';
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

            if (!await PasswordUtils.verifyPassword(data.password, user.password)) {
                return { success: false, message: "Incorrect password"};
            } else {
                return {success: true, message: "Succesfully connected!"};
            }

        } catch (error) {
            console.error(error);
        }
    },

    findById: async (id) => {},

    findAll: async () => {},

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
            const hashedPassword = await PasswordUtils.hashPassword(data.password);
            const result = await prisma.users.update({
                where: {
                    id: data.id
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

    delete: async (userid) => {
        try {
            const query = await prisma.users.delete(userid);
            
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
