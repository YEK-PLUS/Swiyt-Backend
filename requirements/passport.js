import passport from 'passport';
import {
  Strategy as JwtStrategy,
  ExtractJwt,
} from 'passport-jwt';
import Models from '../models';

const { JustUser } = Models;

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = key.JWTkey;

export default (app) => {
  const strategy = new JwtStrategy(jwtOptions, (jwtPayload, done) => {
    const { uid } = jwtPayload;
    JustUser({
      opt: {
        where: { uid },
      },
    }).then((result) => {
      if (!result) {
        done(null, false);
      }
      done(null, result);
    });
  });
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  passport.use('jwt', strategy);
  app.use(passport.initialize());
  app.use(passport.session());
  return passport;
};
