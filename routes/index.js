const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Hello name of someone i know!');
});

module.exports = routes;