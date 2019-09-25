import Sequelize from 'sequelize';

module.exports = sequelize.define('wish_lists', {
  uid: { type: Sequelize.CHAR, primaryKey: true },
  users_uid: Sequelize.CHAR,
  lessons_uid: Sequelize.CHAR,

  wish_list: Sequelize.BOOLEAN,
  card: Sequelize.BOOLEAN,

  deleted_at: Sequelize.DATE,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
}, {
  underscored: true,
});
