import { PrismaClient } from '@prisma/client';
import { PasswordUtils } from '../utils/passwordHasing.js';
const prisma = new PrismaClient({
    log: ["query"]
});

export const AuthModel = {
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
                return {success: false, message: "User not found"};
            }

            switch (await PasswordUtils.verifyPassword(data.password, user.password)) {
                case true:
                    return {success: true, message: "Succesfully connected!"};
                case false:
                    return { success: false, message: "Incorrect password"};
            }

        } catch (error) {
            throw error;
        }
    },
    //   createUser: async (data) => {
    //     try {
    //         const result = await prisma.users.create({
    //             data: {
    //                 username: data.username,
    //                 email: data.email,
    //                 password: data.password
    //             }
    //         });
            
    //         if(!result){
    //             throw new Error("impossible d'ajouter user");
    //         }
    //         return result;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
}