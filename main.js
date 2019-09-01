import * as Requirements from './requirements';

const { express, passport, routes } = Requirements;
const { initializeRoutes, initializeError } = routes;

const app = express();
global.passports = passport(app);
initializeRoutes(app);
initializeError(app);
module.exports = app;
