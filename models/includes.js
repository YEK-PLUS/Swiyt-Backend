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
export const IncludeUserCourses = {
  model: Course,
  include: [
    {
      model: User,
      include: {
        model: Images,
        include: Cdn,
      },
      as: 'admin',
    },
    {
      ...IncludeImage,
      as: 'banner',
    },
    {
      ...IncludeImage,
      as: 'thub',
    },
  ],
};
export const IncludeUserAndUserDetails = [IncludeImage, IncludeUserDetail];
export const IncludeUserAndUserDetailsAndUserCourses = [
  IncludeImage,
  IncludeUserDetail,
  IncludeUserCourses
];
export const IncludeCourse = [
  {
    model: User,
    include: IncludeUser,
    as: 'admin',
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
export const IncludeSubscription = [
  {
    model: Course,
    include: IncludeCourse,
  },
];
