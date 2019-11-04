const ctrl = {}

ctrl.index = (req, res) =>{
    res.send('All career');
}
ctrl.view = (req, res) =>{
    res.send('career');
}
ctrl.create = (req, res) =>{
    res.send('Add career');
}
ctrl.update = (req, res) =>{
    res.send('Update career');
}
ctrl.delete = (req, res) =>{
    res.send('Delete career');
}


module.exports = ctrl;