const { Comment, Post, User } = require('../models');
const ctrl = {}

ctrl.allComments = async(req, res) =>{
    const comments = await Comment.find();
    res.json(comments);
}

ctrl.index = async(req, res) =>{
    const post = await Post.findById(req.params.post_id);
    if ( post ) {
        const comment = await Comment.find({idPost:post._id});
        res.json(comment);
    }
}

ctrl.create = async(req, res) =>{
    const post = await Post.findById(req.params.post_id);
    const user = await User.findById(req.params.user_id);
    if( post && user ){
        const newComment = new Comment({
            description: req.body.description,
            userName: req.body.userName
        })
        newComment.idUser = user._id;
        newComment.idPost = post._id;
        newComment.save();
        res.json(newComment);
    }
}

ctrl.update = async(req, res) =>{
    res.send('Update comment');
}

ctrl.delete = async(req, res) =>{
    const comment = await Comment.findByIdAndDelete(req.params.id);
    res.json(comment);
}


module.exports = ctrl;