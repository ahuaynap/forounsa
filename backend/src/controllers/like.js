const { Comment, Post, Like, User } = require('../models');
const ctrl = {}

ctrl.post = async(req, res) =>{
    const user = await User.findById(req.params.user_id);
    const post = await Post.findById(req.params.post_id);
    if(user && post){
        const like = await Like.find({idUser:user._id,idEntity:post._id});
        if( like ){
            res.json(like);
        }
        else{
            const newLike = new Like({});
            newLike.idUser = user._id;
            newLike.idPost = post._id;
            await newLike.save();
            res.json(newLike);
        }
    }
}

ctrl.postchange = async(req, res) =>{
    const user = await User.findById(req.params.user_id);
    const post = await Post.findById(req.params.post_id);
    if(user && post){
        const like = await Like.find({idUser:user._id,idEntity:post._id});
        like.state = !like.state;
        await like.save();
        res.json(like);
    }
}

ctrl.comment = async(req, res) =>{
    const user = await User.findById(req.params.user_id);
    const comment = await Comment.findById(req.params.comment_id);
    if(user && comment){
        const like = await Like.find({idUser:user._id,idEntity:comment._id});
        if( like ){
            res.json(like);
        }
        else{
            const newLike = new Like({});
            newLike.idUser = user._id;
            newLike.idComment = comment._id;
            await newLike.save();
            res.json(newLike);
        }
    }
}

ctrl.commentchange = async(req, res) =>{
    const user = await User.findById(req.params.user_id);
    const comment = await Comment.findById(req.params.comment_id);
    if(user && comment){
        const like = await Like.find({idUser:user._id,idEntity:comment._id});
        like.state = !like.state;
        await like.save();
        res.json(like);
    }
}

module.exports = ctrl;