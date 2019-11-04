const Course = require('../models/course');
const Career = require('../models/career');
const ctrl = {}

ctrl.index = async (req, res) =>{
    const courses = await Course.find({idCareer: req.params.id_career});
    res.json(courses);
}
ctrl.view = async(req, res) =>{
    const course = await Course.findById(req.params.id);
    res.json(course);
}
ctrl.create = async(req, res) =>{
    const career = await Career.findById(req.params.id_career);
    if (career) {
        const newCourse = new Course({
            name: req.body.name,
            description: req.body.description
        });
        newCourse.idCareer = career._id;
        await newCourse.save();
        res.json(newCourse);
    }
}
ctrl.update = (req, res) =>{
    res.send('Update course');
}
ctrl.delete = (req, res) =>{
    const courseDeleted = Course.findByIdAndRemove(req.params.id);
    res.json(courseDeleted);
}


module.exports = ctrl;