import { PostController } from "../controllers/postController.js";

// import { PostControllers  } from "../controller/test.js";

import express from "express"

const router = express.Router();

// const controller = new PostControllers();

// router.get("/posts", controller.getAllPosts);
router.get('/posts', PostController.getAllPosts);
// router.post("/posts/:id", PostController.createPost());
// router.get('/posts', getAllPosts)
// router.post("/posts/:id", PostController.createPost);
// router.post("/posts/update/:id", PostController.updatePost());
// bonjour
export { router as posts };