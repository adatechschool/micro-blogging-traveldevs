import express from 'express';
const router = express.Router();

router.get('/posts', async (req, res) => {
    try {
        if (req.query.id) {
            res.json(await PostController.getPostById(req.query.id))
        } else {
            res.json(await PostController.getAllPosts());
        }
    } catch (error) {
        console.error(error);
    }
});

router.post('/posts', async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error);
    }
});