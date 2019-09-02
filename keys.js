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
    'http://localhost:3000',
    'http://192.168.1.105:3000',
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
    requiredFields: {
      error: 'fill in the required fields',
    },
  },
};
