import Sequelize from 'sequelize';

module.exports = sequelize.define('user_details', {
  uid: { type: Sequelize.CHAR, primaryKey: true },

  telephone: Sequelize.STRING,
  telephone_verified: Sequelize.BOOLEAN,
  telephone_code: Sequelize.STRING,

  mail: Sequelize.STRING,
  mail_verified: { type: Sequelize.CHAR, defaultValue: false },
  mail_code: Sequelize.STRING,

  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,

  biography: Sequelize.TEXT,
  summary: Sequelize.TEXT,

  location: Sequelize.STRING,
  title: Sequelize.STRING,

  picture_uid: { type: Sequelize.CHAR, defaultValue: 'default' },
  banner_uid: { type: Sequelize.CHAR, defaultValue: 'default' },

  links: Sequelize.STRING,
  referance: Sequelize.STRING,
  portfolio: Sequelize.STRING,
  certificates: Sequelize.STRING,
  experience: Sequelize.STRING,
  education: Sequelize.STRING,

  deleted_at: Sequelize.DATE,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
}, {
  underscored: true,
});
