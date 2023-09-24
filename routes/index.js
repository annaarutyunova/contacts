const routes = require('express').Router();
const baseController = require('../controllers/baseController');

routes.get('/', baseController.homeRoute);
routes.get('/profile', baseController.profileRoute);
routes.get('/login', baseController.loginRoute);

module.exports = routes;