const Course = require('../models/course');
const Career = require('../models/career');
const Post = require('../models/post');
const Comment = require('../models/comment');
const ctrl = {}

ctrl.topTen = async (req, res) => {
    //query
    const courses = await Course.find({}).then((courses) => {
        courses.forEach((course, indexCourse, someArray) => {
            var totalComments = 0;
            console.log(course.name);

            Post.find({
                idCourse: course._id
            }).then((posts) => {
                posts.forEach((post, indexPost, someArray2) => {
                    Comment.find({
                        idPost: post._id
                    }).countDocuments((err3, count) => {
                        if (err3) console.log(err3);
                        //totalComments = totalComments + count;
                    }).then((count) => {
                        totalComments = totalComments + count;
                    });
                });
            });

            console.log(totalComments);
        });
    });
    res.json(courses);
}

ctrl.index = async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
}

ctrl.view = async (req, res) => {
    const course = await Course.findById(req.params.id);
    if (course) {
        course.views = course.views + 1;
        await course.save();
        res.json(course);
    } else {
        res.json('error');
    }
}

ctrl.create = async (req, res) => {
    const career = await Career.findById(req.params.id);
    if (career) {
        const newCourse = new Course({
            idCourse: req.body.idCourse,
            idPrerequisite: req.body.idPrerequisite,
            name: req.body.name,
            credit: req.body.credit,
            semester: req.body.semester,
            description: req.body.description
        });
        newCourse.idCareer = career._id;
        await newCourse.save();
        res.json(newCourse);
    }
}
ctrl.update = async (req, res) => {
    const courseUpdated = await Course.findById(req.params.id);
    if (courseUpdated) {
        const newCourse = new Course({
            name: req.body.name,
            description: req.body.description
        });
        newCourse.idCareer = courseUpdated.idCareer;
        const course = await Course.findByIdAndUpdate(courseUpdated._id, newCourse);
        res.json(course);
    }
}
ctrl.delete = (req, res) => {
    const courseDeleted = Course.findByIdAndRemove(req.params.id);
    res.json(courseDeleted);
}


module.exports = ctrl;