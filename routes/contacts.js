const routes = require('express').Router();
const contactController = require('../controllers/contactController');

routes.get('/', contactController.contacts);
routes.get('/databases', contactController.databases);
routes.get('/:ObjectId', contactController.byid);
routes.post('/', contactController.addContact);
routes.put('/update', contactController.updateContact);
routes.delete('/delete', contactController.deleteContact);

module.exports = routes;