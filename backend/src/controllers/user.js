const ctrl = {}
const { User } = require('../models');

ctrl.index = async(req, res) =>{
    const users = await User.find();
    res.json(users);
}
ctrl.view = async(req, res) =>{
    const user = await User.findById(req.params.id);
    if( user ) {
        res.json(user);
    }
    else{
        res.json({error:'error'});
    }
}
ctrl.create = async(req, res) =>{
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
    })
    await newUser.save();
    res.json(newUser);
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
}


module.exports = ctrl;