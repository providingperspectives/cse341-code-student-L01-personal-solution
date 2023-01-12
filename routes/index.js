const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Isiakpona Bumi');
});
routes.get('/test', (req, res) => {
  res.send('Nathan Birch');
});

module.exports = routes;
