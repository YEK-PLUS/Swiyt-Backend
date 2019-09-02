import User from '../model/user';
import Images from '../model/images';
import Cdn from '../model/cdn';

export const UserIncludes = {
  include: [
    {
      model: Images,
      include: [
        {
          model: Cdn,
        },
      ],
    },
  ],
};

export const JustUser = (username, password) => User.findOne({
  where: {
    username,
    password,
  },
  ...UserIncludes,
});
export const JustUserWithUid = (uid) => User.findOne({
  where: {
    uid,
  },
  ...UserIncludes,
});
export const JustUserWithUserName = (username) => User.findOne({
  where: {
    username,
  },
  ...UserIncludes,
});
