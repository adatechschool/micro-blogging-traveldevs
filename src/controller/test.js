import { PostModel } from "../model/postModel.js";
export class PostControllers {
    constructor(){
        // req = this.req;
        // res = this.res;
    }

    async getAllPosts(req, res) {
        return res.json(await PostModel.findAll());
    }
}