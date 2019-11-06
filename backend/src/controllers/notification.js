const { Notification, User, Post } = require('../models')
const ctrl = {}

ctrl.index = async(req, res) =>{
    const notifications = await Notification.find({idUser:req.params.user_id});
    res.json(notifications);
}

ctrl.like = async(req, res) =>{
    const user = await User.findById(req.params.user_id);
    const post = await Post.findById(req.params.post_id);
    if(user && post){
        const newNotification = new Notification({
            type: 'like'
        })
        newNotification.idUser = user._id;
        newNotification.idPist = post._id;
        newNotification.save();
        res.json(newNotification);
    }
}

ctrl.comment = async(req, res) =>{
    const user = await User.findById(req.params.user_id);
    const post = await Post.findById(req.params.post_id);
    if(user && post){
        const newNotification = new Notification({
            type: 'comment'
        })
        newNotification.idUser = user._id;
        newNotification.idPist = post._id;
        newNotification.save();
        res.json(newNotification);
    }
}

ctrl.update = (req, res) =>{
    res.send('Update comment');

}
ctrl.delete = (req, res) =>{
    res.send('Delete comment');
}


module.exports = ctrl;