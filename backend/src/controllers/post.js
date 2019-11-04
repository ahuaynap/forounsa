const ctrl = {}

ctrl.index = (req, res) =>{
    res.send('All Post');
}
ctrl.view = (req, res) =>{
    res.send('Post');
}
ctrl.create = (req, res) =>{
    res.send('Add Post');
}
ctrl.update = (req, res) =>{
    res.send('Update Post');
}
ctrl.delete = (req, res) =>{
    res.send('Delete Post');
}


module.exports = ctrl;