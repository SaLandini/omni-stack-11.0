const express = require('express');

const OnitController = require('./controllers/OnitController');
const incidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionControler');

const routes = express.Router();

routes.post('/sessions',SessionController.create)

routes.get('/ongs', OnitController.index);
routes.post('/ongs', OnitController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents',incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id',incidentController.delete);

module.exports = routes;