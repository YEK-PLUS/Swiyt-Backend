import Sequelize from 'sequelize';

module.exports = sequelize.define('categories', {
  uid: { type: Sequelize.CHAR, primaryKey: true },
  name: Sequelize.STRING,

  deleted_at: Sequelize.DATE,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
}, {
  underscored: true,
});
