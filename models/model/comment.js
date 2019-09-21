import Sequelize from 'sequelize';

module.exports = sequelize.define('lesson_comments', {
  uid: { type: Sequelize.CHAR, primaryKey: true },
  users_uid: Sequelize.CHAR,
  lessons_uid: Sequelize.CHAR,

  comment: Sequelize.TEXT,
  star: Sequelize.INTEGER,

  deleted_at: Sequelize.DATE,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
}, {
  underscored: true,
});
