module.exports = {
  origin(origin, callback) {
    if (key.whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, true);
    }
  },
  credentials: true,
};
