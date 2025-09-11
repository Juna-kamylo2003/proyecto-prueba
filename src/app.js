const express = require('express');
const paulaRouter = require('./routers/Paula');

const app = express();

console.log("Ruta /paula cargada correctamente");

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Hola equipo 👋');
});

// Montar router de Paula
app.use('/paula', paulaRouter);

module.exports = app;
