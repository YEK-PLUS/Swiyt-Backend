import model from './model';

const includes = require('./includes');
const getter = require('./getter');
const filters = require('./filters');
const setter = require('./setter');

module.exports = {
  ...getter, ...model, ...filters, ...setter,
};
