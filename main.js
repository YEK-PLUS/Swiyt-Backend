import * as Requirements from './requirements';

const { express, passport, routes } = Requirements;
const { initializeRoutes, initializeError } = routes;
const app = express();
const myPassport = passport(app);
const mainRoute = initializeRoutes(app);
const errotRoute = initializeError(app);
module.exports = app;
