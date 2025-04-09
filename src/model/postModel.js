import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ["query"]
});

export const PostModel = {
    findAll: async () => {
        const result = await prisma.posts.findMany()
        return result 
    }
}