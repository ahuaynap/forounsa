const ctrl = {}
const { User } = require('../models');

ctrl.index = async(req, res) =>{
    const users = await User.find();
    res.json(users);
}
ctrl.view = async(req, res) =>{
    const user = await User.findOne({email: req.params.email});
    if( user ) {
        res.json(user);
    }
    else{
        res.json({error:'error'});
    }
}
ctrl.create = async(req, res) =>{
    const user = new User({
        name: req.body.name,
        email: req.body.email
    });
    user.save();
    res.json(user);
}
ctrl.subscription = async(req,res)=>{
    const user = await User.findById(req.params.user_id);
    if(user){
        user.subscription.push(req.params.course_id);
        await user.save();
        res.json(user);
    }
}
ctrl.update = async(req, res) =>{
    const currentUser = await User.findById(req.params.id);
    if(currentUser){
        const updateUser = new User({
            name: req.body.name,
            email: req.body.email
        })
        const user = await User.findByIdAndUpdate(currentUser._id,updateUser);
        res.json(user);
    }
}
ctrl.delete = async(req, res) =>{
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json(deletedUser);
}


module.exports = ctrl;