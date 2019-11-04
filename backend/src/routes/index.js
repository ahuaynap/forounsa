const express = require('express');
const router = express.Router();
const post = require('../controllers/post');
const comment = require('../controllers/comment');
const course = require('../controllers/course');
const career = require('../controllers/career');

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

    router.get('/post/course/:course_id',post.index);
    router.get('/post/user/:user_id',post.index);
    router.get('/post/:id',post.view);
    router.post('/post',post.create);
    router.put('/post/:id',post.update);
    router.delete('/post/:id',post.delete);

    router.get('/comment/:post_id',comment.index);
    router.post('/comment',comment.create);
    router.put('/comment/:id',comment.update);
    router.delete('/comment/:id',comment.delete);

    app.use(router);
}