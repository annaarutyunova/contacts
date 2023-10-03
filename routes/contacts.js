const routes = require('express').Router();
const contactController = require('../controllers/contactController');

routes.get('/', contactController.contacts);
routes.get('/databases', contactController.databases);
routes.get('/:id', contactController.byid);
routes.post('/', contactController.addContact);
routes.put('/:id', contactController.updateContact);
routes.delete('/:id', contactController.deleteContact);

module.exports = routes;