const routes = require('express').Router();
const contactController = require('../controllers/contactController');

routes.get('/', contactController.homeRoute);
routes.get('/profile', contactController.profileRoute);
routes.get('/login', contactController.loginRoute);

module.exports = routes;