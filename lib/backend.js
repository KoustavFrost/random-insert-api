import express from 'express';
import path from 'path';
import { validateJson } from './services/validate.js';
const __dirname = path.resolve();

const createServer = () => {
  const app = express();
  app.set('json spaces', 2);
  app.set('view engine', 'ejs');
  app.set('views', __dirname + '/views');
  app.use(express.json());

  app.use('/assets', express.static(__dirname + '/public'));

  app.get('/', (req, res) => {
    res.render('index.ejs');
  });

  app.get('/documentation', (req, res) => {
    res.render('documentation');
  });

  app.post('/validateJson', async (req, res, next) => {
    const returnData = await validateJson(req.body);
    res.send(returnData);
    res.status(returnData.code).json(returnData);
  });

  return app;
};

export { createServer };
