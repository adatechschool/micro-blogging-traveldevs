import { PostModel } from "../model/postModel.js";

export const PostController =  {

    // getPostById: async (id) => {
    //     try {
    //         const result = await PostModel.findById(req.query.id);

    //         if (!result) {
    //             throw new Error("Post not found");
    //         }
    //         res.json(result);
    //         //posView.displayMainPage(card(result))
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },

    getAllPosts : async (req, res) => {
        try {
            const result = await PostModel.findAllPosts()
            return res.json(result)
        } catch (error) {
            console.error(error)
        }
    },

    // createPost: async ( res, req) => {
    //     const data = req.body;
    //     const user_id = req.params;
    //     try {
    //         const result = await PostModel.addPost(data, user_id)
    //         return res.json(result)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },

    // updatePost : async (req, res) => {
    //     const data = req.body;
    //     const id = req.params;
    //     try {
    //         const result = await PostModel.update(data, id)
    //         return res.json(result)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
}

// export const getAllPosts = async (req,res) => {
//     return res.json(await PostModel.findAll());
// }


