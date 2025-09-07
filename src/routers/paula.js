module.exports = (app) => {
  app.get('/paula', (req, res) => {
    res.send('Hola, soy Paula 😎');
  });
};
