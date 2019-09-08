import User from '../model/user';
import * as Includes from '../includes';

const { IncludeUser,IncludeUserAndUserDetailsAndUserCourses } = Includes;
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
export const JustUserDetailsAndCourseWithUserName = (username) => User.findOne({
  where: sequelize.where(
    sequelize.fn('lower', sequelize.col('username')),
    sequelize.fn('lower', username)
  ),
  include: IncludeUserAndUserDetailsAndUserCourses,
});
