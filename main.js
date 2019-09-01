import * as Requirements from './requirements';
import Security from './middlewares/security';

const { express, passport, routes } = Requirements;
const { initializeRoutes, initializeError } = routes;

const app = express();
global.passportSecurity = passport(app);
Security(app);
initializeRoutes(app);
initializeError(app);
module.exports = app;
