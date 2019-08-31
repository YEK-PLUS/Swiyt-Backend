import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
import cors from 'cors';

export default () => {
  const app = express();

  const sessionOption = {
    secret: key.sessionScret,
    resave: true,
    saveUninitialized: true,
  };

  const whitelist = [
    'http://localhost:3000',
    'http://192.168.1.105:3000',
  ];

  const corsOptions = {
    origin(origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  };

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(session(sessionOption));
  app.use(cors(corsOptions));

  return app;
};
