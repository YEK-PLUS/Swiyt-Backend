import Sequelize from 'sequelize';

module.exports = sequelize.define('has_categories', {
  uid: { type: Sequelize.CHAR, primaryKey: true },
  category_uid: Sequelize.CHAR,
  from_uid: Sequelize.CHAR,

  deleted_at: Sequelize.DATE,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
}, {
  underscored: true,
});
