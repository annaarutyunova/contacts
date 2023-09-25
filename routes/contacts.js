const routes = require('express').Router();
const contactController = require('../controllers/contactController');

routes.get('/', contactController.contacts);
routes.get('/databases', contactController.databases);
routes.get('/byid', contactController.byid);

module.exports = routes;