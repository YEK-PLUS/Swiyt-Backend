import User from './model/user';
import Images from './model/images';
import Cdn from './model/cdn';
import UserDetails from './model/userDetails';
import Course from './model/course';
import Category from './model/category';
import CategoryConnector from './model/categoryConnector';
import HasCategories from './model/hasCategory';

export const IncludeJustCategory = {
  model: Category,
  include: {
    model: CategoryConnector,
    include: {
      model: Category,
      include: {
        model: CategoryConnector,
        include: Category,
      },
    },
  },
};
export const IncludeCategory = {
  model: HasCategories,
  include: IncludeJustCategory,
};

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
export const IncludeUserAndUserDetailsAndUserCourses = [
  IncludeImage,
  IncludeUserDetail,
  IncludeUserCourses,
];
export const IncludeCourse = [
  {
    model: User,
    include: [{ ...IncludeImage }],
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
  {
    ...IncludeCategory,
  },
];
export const IncludeUserCourses = {
  model: Course,
  include: [...IncludeCourse],
};
export const IncludeSubscription = [
  {
    model: Course,
    include: IncludeCourse,
  },
];
