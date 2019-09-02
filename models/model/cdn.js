import Sequelize from 'sequelize';

module.exports = sequelize.define('cdn_data', {
  uid: { type: Sequelize.CHAR, primaryKey: true },
  url: Sequelize.TEXT,

  deleted_at: Sequelize.DATE,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
}, {
  underscored: true,
});
