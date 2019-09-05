module.exports = {
  sessionSecret: 'keyboard cat',
  JWTkey: 'secret',
  database: {
    dbname: 'heroku_b543e43b5602ad7',
    username: 'b531d6fd58abaf',
    password: '1d7e0832',
    host: 'eu-cdbr-west-02.cleardb.net',
    dialect: 'mysql',
  },
  whitelist: [
    'http://localhost:3000',
    'http://localhost:8080',
    'http://192.168.1.105:3000',
    'http://192.168.1.105:8080',
    'chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop',
  ],
  returns: {
    success: {
      success: 'success',
    },
    error: {
      error: 'error',
    },
    userExists: {
      error: 'user exists',
    },
    userNotFound: {
      error: 'user not found',
    },
    requiredFields: {
      error: 'fill in the required fields',
    },
  },
};
