import mainRouter from './main';
import authRouter from './auth';

export const initializeRoutes = (app) => {
  app.use('/main', mainRouter);
  app.use('/auth', authRouter);
};
export const initializeError = (app) => {
  app.use((req, res) => {
    res.send(404, { error: 'not found' });
  });
};
export default { initializeRoutes, initializeError };
