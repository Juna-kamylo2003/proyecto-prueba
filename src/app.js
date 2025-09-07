
const express = require('express');
const app = express();

// Rutas
app.get('/', (req, res) => {
  res.send('Hola equipo 🚀 - Main limpio');
});

// importar rutas (cada miembro agregará su propia ruta en su feature)
try { require('./routes/paula')(app); } catch (e) {}

module.exports = app;
