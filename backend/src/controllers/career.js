const { Career } = require('../models');

const ctrl = {}

ctrl.index = async(req, res) =>{
    const careers = await Career.find();
    res.json(careers);
}
ctrl.view = async(req, res) =>{
    const career = await Career.findById(req.params.id);
    res.json(career);
}
ctrl.create = async(req, res) =>{
    const newCareer = new Career({
        name: req.body.name,
        description: req.body.description
    });
    const careerSaved = await newCareer.save();
    res.json(careerSaved);
}
ctrl.update = async (req, res) =>{
    const newCareer = new Career({
        name: req.body.name,
        description: req.body.description
    });
    const careerUpdated = await Career.findByIdAndUpdate(req.params.id, newCareer);
}
ctrl.delete = async (req, res) =>{
    const career = await Career.findByIdAndDelete(req.params.id);
    res.json(career);
}


module.exports = ctrl;