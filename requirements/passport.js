import passport from 'passport';
import {
  Strategy as JwtStrategy,
  ExtractJwt,
} from 'passport-jwt';

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = key.JWTkey;

export default (app) => {
  const strategy = new JwtStrategy(jwtOptions, (jwtPayload, next) => {
    const { uuid } = jwtPayload;

    // WAIT DB CONNECTION
    return next(null, uuid);
  });
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  passport.use(strategy);
  app.use(passport.initialize());
  app.use(passport.session());
  return passport;
};
