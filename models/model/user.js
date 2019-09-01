import Sequelize from 'sequelize';

module.exports = (sequelize) => sequelize.define('user', {
  uid: { type: Sequelize.STRING, primaryKey: true },
  username: Sequelize.STRING,
  realname: Sequelize.STRING,
  password: Sequelize.STRING,

  deleted_at: Sequelize.DATE,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
}, {
  underscored: true,
});
