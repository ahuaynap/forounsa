const express = require('express');
const morgan = require('morgan');
const routes = require('../routes')

module.exports = app => {
    
    app.set('port', process.env.PORT || 3000);

    // middlewares
    app.use(morgan('dev'));
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    routes(app);


    return app;
}