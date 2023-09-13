const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.homeRoute);
routes.get('/profile', lesson1Controller.profileRoute);
routes.get('/login', lesson1Controller.loginRoute);

module.exports = routes;