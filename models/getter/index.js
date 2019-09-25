const User = require('./user');
const Course = require('./course');
const Subscription = require('./subscription');
const Other = require('./other');

module.exports = { ...User,...Course,...Subscription,...Other };
