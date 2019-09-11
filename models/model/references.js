import Sequelize from 'sequelize';

module.exports = sequelize.define('references', {
  id: { type: Sequelize.CHAR, primaryKey: true },
  name : Sequelize.STRING,
  images_uid : Sequelize.CHAR,
  url : Sequelize.TEXT,


  deleted_at: Sequelize.DATE,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
}, {
  underscored: true,
});
