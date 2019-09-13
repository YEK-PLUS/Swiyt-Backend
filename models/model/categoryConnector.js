import Sequelize from 'sequelize';

module.exports = sequelize.define('categories_connector', {
  uid: { type: Sequelize.CHAR, primaryKey: true },
  from_uid: Sequelize.CHAR,
  to_uid: Sequelize.CHAR,

  deleted_at: Sequelize.DATE,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
}, {
  underscored: true,
});
