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
}