import Course from '../model/course';
import User from '../model/user';
import Subscription from '../model/subscription';
import * as Includes from '../includes';

const {
  IncludeCourse, IncludeSubscription, IncludeImage, IncludeUserCourses,
} = Includes;
export const PopulerCourses = () => Course.findAll({
  limit: 5,
  include: IncludeCourse(),
});
export const AllPopulerCourses = () => Course.findAll({
  include: IncludeCourse(),
});
export const Subscriptions = (userUid) => Subscription.findAll({
  where: {
    user_uid: userUid,
  },
  limit: 5,
  include: IncludeSubscription,
});
export const AllSubscriptions = (userUid) => Subscription.findAll({
  where: {
    user_uid: userUid,
  },
  include: IncludeSubscription,
});
export const CourseDetail = (username, course,userUid) => {
  return User.findOne({
    where: sequelize.where(
      sequelize.fn('lower', sequelize.col('username')),
      sequelize.fn('lower', username),
    ),
    include: [
      {
        ...IncludeUserCourses(userUid),
        where: sequelize.where(
          sequelize.fn('lower', sequelize.col('name')),
          sequelize.fn('lower', course.replace('-', ' ')),
        ),
      },
      {
        ...IncludeImage,
      },
    ],
  });
}
