import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ["query"]
});

export const PostModel = {

    // findById: async (id) => {
    //     try {
    //         const result = await prisma.posts.findUnique({
    //             where: {
    //                 id: id
    //             }
    //         })
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },

    findAll: async () => {
        try {
            const result = await prisma.posts.findMany();
            if (!result) {
                throw new Error("Impossible de chercher posts");
            }
            return result;
        } catch (error) {
            console.error(error);
        }
    },

    // create: async (data, id) => {
    //     try {
    //         const result = await prisma.posts.create({
    //             where: {
    //                 user_id: id
    //             },
    //             data: {
    //                 title: data.title,
    //                 content: data.content
    //             }
    //         });
            
    //         if(!result){
    //             throw new Error("impossible d'ajouter post");
    //         }
    //         return result;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },

    // update: async (data, id) => {
    //     try {
    //         const result = await prisma.posts.update({
    //             where: {
    //                 id : id
    //             },
    //             data:{
    //                 title: title,
    //                 content: content
    //             }
    //         })
    //         if(!result){
    //             throw new Error("impossible de modifier le post")
    //         }
    //         return result;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },
    
    // delete: async (id) => {
    //     try {
    //         const result = await prisma.posts.delete({
    //             where: {
    //                 id: id
    //             }
    //         });
    //         return result;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },

    joinPost: async (req, res) => {
        try {
            const result = await prisma.posts.findMany({
                include: {
                  user: {
                    select: {
                      username: true
                    }
                  }
                }
              });
            return result;
        } catch (error) {
            console.error(error);
        }
    }
}