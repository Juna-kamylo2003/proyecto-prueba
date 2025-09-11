const express = require('express');
const app = express();

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Hola equipo 🚀 - Main limpio');
});

// Importar rutas de Paula (con P mayúscula)
try {
  const paulaRouter = require('./routers/Paula.js');
  app.use('/paula', paulaRouter);
  console.log('Ruta /paula cargada correctamente');
} catch (err) {
  console.error('Error cargando ruta /paula:', err.message);
}

module.exports = app;
