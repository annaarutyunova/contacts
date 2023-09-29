const routes = require('express').Router();
const contactController = require('../controllers/contactController');

routes.get('/', contactController.contacts);
routes.get('/databases', contactController.databases);
routes.get('/:ObjectId', contactController.byid);

module.exports = routes;