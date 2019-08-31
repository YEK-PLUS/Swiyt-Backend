import Sequelize from 'sequelize';

const {
  dbname, username, password, host, dialect,
} = key.database;

export default new Sequelize(dbname, username, password, {
  host,
  dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
