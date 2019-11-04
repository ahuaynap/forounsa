const ctrl = {}

ctrl.index = (req, res) =>{
    res.send('All course');
}
ctrl.view = (req, res) =>{
    res.send('course');
}
ctrl.create = (req, res) =>{
    res.send('Add course');
}
ctrl.update = (req, res) =>{
    res.send('Update course');
}
ctrl.delete = (req, res) =>{
    res.send('Delete course');
}


module.exports = ctrl;