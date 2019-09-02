import Sequelize from 'sequelize';

module.exports = sequelize.define('images', {
  uid: { type: Sequelize.CHAR, primaryKey: true },
  cdn_uid: Sequelize.CHAR,

  deleted_at: Sequelize.DATE,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
}, {
  underscored: true,
});
