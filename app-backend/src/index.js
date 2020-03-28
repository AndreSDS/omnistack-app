/*
tipos de parâmetros
    // request.query - parametros nomeados 
    // request.params - parametros para identificar recursos
    // request.body - utilizado para criar ou alterar recursos
*/
const routes = require('./routes');
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);