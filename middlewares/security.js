import _ from 'lodash';

module.exports = (app) => {
  app.use((req, res, next) => {
    if (key.whitelist.indexOf(req.path) > -1) {
      return next();
    }
    passportSecurity.authenticate('jwt', { session: false }, (err, user) => {
      if (_.pick(user, ['uid']).uuid != false) {
        req.session.user = user.toJSON();
        req.session.save();
        return next(user);
      }
    })(req, res, next);
  });
  return true;
};
