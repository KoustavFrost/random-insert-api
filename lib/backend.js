const express = require('express');
const path = require('path');

exports.createServer = () => {
  const app = express();
  app.set('json spaces', 2);
  app.set('view engine', 'ejs');
  app.set('views', path.resolve(__dirname, '..', 'views'));

  app.use('/assets', express.static(path.join(__dirname, '..', 'public')));

  // app.use(function (req, res, next) {
  //   res.locals = {
  //     hello: 'hello'
  //   };

  //   next();
  // });

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/documentation', (req, res) => {
    res.render('documentation');
  });

  return app;
};
