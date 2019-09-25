const User = require('./user');
const Course = require('./course');
const Other = require('./other');

module.exports = { ...User, ...Course,...Other };
