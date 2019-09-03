import User from '../model/user';
import * as Includes from '../includes';

const { IncludeUser } = Includes;
export const JustUser = (username, password) => User.findOne({
  where: {
    username,
    password,
  },
  include: IncludeUser,
});
export const JustUserWithUid = (uid) => User.findOne({
  where: {
    uid,
  },
  include: IncludeUser,
});
export const JustUserWithUserName = (username) => User.findOne({
  where: {
    username,
  },
  include: IncludeUser,
});
