const { Post, Course, User } = require('../models');

const ctrl = {}

ctrl.course = async(req, res) =>{
    const course = await Course.findById(req.params.course_id);
    if( course ){
        const posts = await Post.find({idCourse:course._id});
        res.json(posts);
    }
}

ctrl.subscription = async(req, res) =>{
    const user = await User.findById(req.params.user_id);
    let courses = [];
    for (let i = 0; i < user.subscription.length; i++) {
        courses.push(await Course.findById(user.subscription[i]));
    }
    let posts = [];
    for (let i = 0; i < courses.length; i++) {
        posts.push(await Post.find());
    }
    res.json(posts);
}

ctrl.user = async(req, res) =>{
    const user = await User.findById(req.params.user_id);
    if( user ){
        const posts = await Post.find({idUser:user._id});
        res.json(posts);
    }
}

ctrl.view = async(req, res) =>{
    const post = await Post.findById(req.params.id);
    res.json(post);
}

ctrl.create = async(req, res) =>{
    const course = await Course.findById(req.params.id_career);
    const newPost = new Post({
        name: req.body.name,
        description: req.body.description,
        fileUrl: req.body.fileUrl,
    })
    newPost.idCourse = course._id;
    await newPost.save();
    res.json(newPost);
}

ctrl.update = async(req, res) =>{
    const post = await Post.findById(req.params.id);
    if (post) {
        const updatePost = new Post({
            name: req.body.id,
            description: req.body.id,
            fileUrl: req.body.fileUrl
        })
        const newPost = await Post.findByIdAndUpdate(post._id,updatePost);
        res.json(newPost);
    }
}

ctrl.delete = async(req, res) =>{
    const post = await Post.findByIdAndDelete(req.params.id);
    res.json(post);
}

module.exports = ctrl;