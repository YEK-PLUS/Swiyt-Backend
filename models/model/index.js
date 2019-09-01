import sequelize from '../../requirements/sequelize';

export const User = require('./user')(sequelize);
