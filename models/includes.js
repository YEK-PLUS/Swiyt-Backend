import User from './model/user';
import Images from './model/images';
import Cdn from './model/cdn';
import UserDetails from './model/userDetails';
import Course from './model/course';

export const IncludeImage = {
  model: Images,
  include: Cdn,
};
export const IncludeUserDetail = {
  model: UserDetails,
  include: [
    {
      ...IncludeImage,
      as: 'banner',
    },
    {
      ...IncludeImage,
      as: 'picture',
    },
  ],
};
export const IncludeUser = [IncludeImage];
export const IncludeUserAndUserDetails = [IncludeImage, IncludeUserDetail];
export const IncludeCourse = [
  {
    model:User,
    include:IncludeUser,
    as:'admin'
  },
  {
    ...IncludeImage,
    as: 'banner',
  },
  {
    ...IncludeImage,
    as: 'thub',
  },
];
