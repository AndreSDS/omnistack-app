const express = require('express');
const { celebrate, Segments, Joi } = require ('celebrate');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', celebrate({
    [Segments.PARAMS] : Joi.object().keys({
        id: Joi.string().required(),
    }),
}), SessionController.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY] : Joi.object().keys4({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.numer().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS] : Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.post('/incidents', celebrate({
    [Segments.HEADERS] : Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY] : Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required().email(),
        vlaue: Joi.numer().required()
    })
}), IncidentsController.create);

routes.get('/incidents', clebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentsController.index);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS] : Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentsController.delete);

module.exports = routes;