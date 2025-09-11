const express = require('express');
const paulaRouter = require('./routers/Paula.js'); // ojo: en Windows no importa mayúscula/minúscula, pero en Linux/GitHub sí

const app = express();

console.log("Ruta /paula cargada correctamente");
app.use('/paula', paulaRouter);

module.exports = app;
