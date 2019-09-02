import { User } from '../model';

export const JustUser = (username, password) => User.findOne({
  where: {
    username,
    password,
  },
});
export const JustUserWithUid = (uid) => User.findOne({
  where: {
    uid,
  },
});
export const JustUserWithUserName = (username) => User.findOne({
  where: {
    username,
  },
});
