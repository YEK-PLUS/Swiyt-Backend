import Sequelize from 'sequelize';

module.exports = sequelize.define('subscription', {
  uid: { type: Sequelize.CHAR, primaryKey: true },
  user_uid: Sequelize.CHAR,
  lesson_uid: Sequelize.CHAR,

  deleted_at: Sequelize.DATE,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
}, {
  underscored: true,
});
