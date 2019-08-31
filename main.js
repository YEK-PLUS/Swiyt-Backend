import * as Requirements from './requirements';

const { express, passport, router } = Requirements;
const app = express();
const myPassport = passport(app);

module.exports = app;
