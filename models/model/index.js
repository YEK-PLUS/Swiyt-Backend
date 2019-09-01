import sequelize from '../../requirements/sequelize';
/* eslint-disable global-require */
export const User = require('./user')(sequelize);
/* eslint-enable global-require */
