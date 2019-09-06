import Sequelize from 'sequelize';

module.exports = sequelize.define('lessons', {
  uid: { type: Sequelize.CHAR, primaryKey: true },
  user_uid: Sequelize.CHAR,
  dates_uid: Sequelize.CHAR,//equal user_uid

  thub_uid: { type: Sequelize.CHAR, defaultValue: 'default' },
  banner_uid: { type: Sequelize.CHAR, defaultValue: 'default' },

  price: Sequelize.CHAR,
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  lenght: Sequelize.STRING,

  deleted_at: Sequelize.DATE,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
}, {
  underscored: true,
});
