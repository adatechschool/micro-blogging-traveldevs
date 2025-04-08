import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({
    log: ["query"]
});

export const LoginModel = {
    
    login: async (data) => {
        try {
            const user = await prisma.users.findFirst({
                where: {
                    OR: [
                        { email : data.email },
                        { username: data.username }
                    ]
                }
            });
            
            if (!user) {
                return { success: false, message: "User not found"};
            }

            const isPasswordValid = data.password === user.password;

            if (!isPasswordValid) {
                return { success: false, message: "Password is incorrect" };
            } else {
                return { success: true, message: "Succesfully connected", userName: data.username };
            }

        } catch (error) {
            console.error(error);            
        }
    }
};