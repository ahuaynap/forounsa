const ctrl = {}

ctrl.index = (req, res) =>{
    res.send('All comment');
}
ctrl.view = (req, res) =>{
    res.send('comment');
}
ctrl.create = (req, res) =>{
    res.send('Add comment');
}
ctrl.update = (req, res) =>{
    res.send('Update comment');
}
ctrl.delete = (req, res) =>{
    res.send('Delete comment');
}


module.exports = ctrl;