import mainRouter from './main';
import authRouter from './auth';
import courseRouter from './course';

export const initializeRoutes = (app) => {
  app.use('/main', mainRouter);
  app.use('/auth', authRouter);
  app.use('/course', courseRouter);
};
export const initializeError = (app) => {
  app.use((req, res) => {
    res.send(404, { error: 'not found' });
  });
};
export default { initializeRoutes, initializeError };
