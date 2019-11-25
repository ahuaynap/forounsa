const {
    Career
} = require('../models');

const ctrl = {}

ctrl.index = async (req, res) => {
    const careers = await Career.find();
    res.json(careers);
}
ctrl.view = async (req, res) => {
    const career = await Career.findById(req.params.id);
    res.json(career);
}
ctrl.create = async (req, res) => {
    console.log(req.body.name);
    const newCareer = new Career({
        name: req.body.name,
        description: req.body.description,
        code: req.body.code
    });
    const careerSaved = await newCareer.save();
    res.json(careerSaved);
}
ctrl.update = async (req, res) => {
    Career.findById(req.params.id, (err, doc) => {
        if (!doc) {
            console.log('Error updating');
        } else {
            doc.name = req.body.name;
            doc.description = req.body.description;
            doc.code = req.body.code;
            doc.save((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('success');
                }
            })
        }
    })
    const careerUpdated = await Career.findById(req.params.id);
    res.json(careerUpdated);
}
ctrl.delete = async (req, res) => {
    const career = await Career.findByIdAndDelete(req.params.id);
    res.json(career);
}


module.exports = ctrl;