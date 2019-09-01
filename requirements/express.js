import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
import cors from 'cors';
import corsOptions from '../middlewares/cors';

export default () => {
  const app = express();
  const sessionOption = {
    secret: key.sessionSecret,
    resave: true,
    saveUninitialized: true,
  };


  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(session(sessionOption));
  app.use('*', cors(corsOptions));

  return app;
};
