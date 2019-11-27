const { Comment, Post, Like, User } = require('../models');
const ctrl = {}

ctrl.post = async(req, res) =>{
    const user = await User.findById(req.params.user_id);
    const post = await Post.findById(req.params.post_id);
    if (user && post) {
        const like = await Like.findOne({idUser:user._id,idEntity:post._id});
        if(like){
            res.json(like);
        }
        else{
            const newlike = new Like({
                idUser: user._id,
                idEntity: post._id
            });
            newlike.save();
            res.json(newlike);
        }
    } else {
        res.json({message: 'error'});
    }
}

ctrl.postchange = async(req, res) =>{
    const user = await User.findById(req.params.user_id);
    const post = await Post.findById(req.params.post_id);
    if(user && post){
        const like = await Like.findOne({idUser:user._id,idEntity:post._id});
        if(!like.state){
            post.likes = post.likes + 1;
        }
        else {
            post.likes = post.likes - 1;
        }
        like.state = !like.state;
        post.views = post.views - 1;
        await post.save();
        await like.save();
        res.json(like);
    }else{
        res.json('error');
    }
}

ctrl.comment = async(req, res) =>{
    const user = await User.findById(req.params.user_id);
    const comment = await Comment.findById(req.params.comment_id);
    if(user && comment){
        const like = await Like.findOne({idUser:user._id,idEntity:comment._id});
        if (like) {
            comment.likes = comment.likes - 1;
            await Like.findByIdAndDelete(like._id);
            await comment.save();
            res.json({message:'dislike'});
        } else {
            const newlike = new Like({
                idUser: user._id,
                idEntity: post._id
            });
            comment.likes = comment.likes - 1;
            newlike.save();
            await comment.save();
            res.json(newlike);
        }
    }
}

ctrl.delete = async(req, res) =>{
    const likes = await Like.find();
    for (const like of likes) {
        await Like.findByIdAndDelete(like._id);
    }
    res.json('likes deleted');
}

module.exports = ctrl;