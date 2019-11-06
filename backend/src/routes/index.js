const express = require('express');
const router = express.Router();

const post = require('../controllers/post');
const comment = require('../controllers/comment');
const course = require('../controllers/course');
const career = require('../controllers/career');
const user = require('../controllers/user');
const notification = require('../controllers/notification');
 
module.exports = app =>{
    
    router.get('/career',career.index);
    router.get('/career/:id',career.view);
    router.post('/career',career.create);
    router.put('/career/:id',career.update);
    router.delete('/career/:id',career.delete);

    router.get('/course/career/:id_career',course.index);
    router.get('/course/:id',course.view);
    router.post('/course/:id_career',course.create);
    router.put('/course/:id',course.update);
    router.delete('/course/:id',course.delete);

    router.get('/post/course/:course_id',post.course);
    router.get('/post/subscription/:user_id',post.subscription);
    router.get('/post/user/:user_id',post.user);
    router.get('/post/:id',post.view);
    router.post('/post/:id_course',post.create);
    router.put('/post/:id',post.update);
    router.delete('/post/:id',post.delete);

    router.get('/comment/:post_id',comment.index);
    router.post('/comment/:id_post/:id_user',comment.create);
    router.put('/comment/:id',comment.update);
    router.delete('/comment/:id',comment.delete);

    router.get('/user',user.index);
    router.get('/user/:id',user.index);
    router.post('/user',user.create);
    router.put('/user/:id',user.update);
    router.delete('/user/:id',user.delete);

    router.get('/notification/user/:user_id',notification.index);
    router.post('/notification/like/:user_id/:post_id',notification.like);
    router.post('/notification/comment/:user_id/:post_id',notification.comment);
    router.put('/notification/:id',notification.update);
    router.delete('/notification/:id',notification.delete);

    app.use(router);
}