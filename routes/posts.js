import express from 'express';

const router = express.Router();
import Post from '../models/Post.js';

//ROUTES

//Lista dei post pubblici
router.get('/public', async (req,res) => {    
    try{
        const posts = await Post.find({ "status" : "public" }); 
        
        res.json(posts);
    } catch (err) {
        res.json({ message : err });
    }
});

//Lista di tutti i post
router.get('/', async(req,res) => {    
    try{
        const posts = await Post.find();
        
        res.json(posts);
    } catch (err) {
        res.json({ message : err });
    }
});


//Salvare un post
router.post('/', async (req,res) => {    ;
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        hashtags: req.body.hashtags
    });

    try{
        const savedPost = await post.save();        
        res.json(savedPost);
    }catch (err) {
        res.json({ message : err });
    }
});

//Selezionare un post specifico attraverso l'id
router.get('/:postId/show', async (req, res) => {
    
     try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message : err });
    }
});

//Cancellare un post
router.delete('/:postId', async (req,res) => {
    try {
        /* const removedPost = await Post.remove({ _id : req.params.postId }); */
        const removedPost = await Post.deleteOne({ _id : req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message : err });
    }
});

//Pubblicare un post

router.patch('/:postId/publish', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id : req.params.postId }, 
            { $set : { status : "public" }}
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message : err });
    }
});

//Ricerca per hashtags
router.get('/tags/:hashtags?', async (req,res) => {    
    try{
        if (req.params.hashtags != undefined){
            const posts = await Post.find({ "status" : "public" });
            let foundPosts = [];
            const searchHashtags = (req.params.hashtags).split("-");            
            for (let i=0; i<posts.length; i++){
                if ( searchHashtags.every(elem => posts[i].hashtags.includes(elem))){
                    
                    foundPosts.push(posts[i]);        
                }                
            }            
            res.json(foundPosts);
        }
    } catch (err) {
        res.json({ message : err });
    }
});


export default router;