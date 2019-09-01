module.exports = {
  sessionSecret: 'keyboard cat',
  JWTkey: 'secret',
  database: {
    dbname: 'swiyt',
    username: 'root',
    password: '',
    host: 'localhost',
    dialect: 'mysql',
  },
  whitelist: [
    '/auth/token',
  ],
};
