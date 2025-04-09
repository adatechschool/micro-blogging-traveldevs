import { PostModel } from "../model/postModel.js";

export const PostController = {
    getAllPosts : async () => {
        const getPosts = PostModel.findAll()
        return getPosts
    }
}

const result = PostController.getAllPosts()
const filtered = PostController.filterByLikes(result)