import Sequelize from 'sequelize';

module.exports = sequelize.define('users', {
  uid: { type: Sequelize.CHAR, primaryKey: true },
  username: Sequelize.STRING,
  realname: Sequelize.STRING,
  password: Sequelize.STRING,

  deleted_at: Sequelize.DATE,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
}, {
  underscored: true,
});
