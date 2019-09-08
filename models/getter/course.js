import Course from '../model/course';
import Subscription from '../model/subscription';
import * as Includes from '../includes';

const { IncludeCourse, IncludeSubscription } = Includes;
export const PopulerCourses = () => Course.findAll({
  limit: 5,
  include: IncludeCourse,
});
export const Subscriptions = (userUid) => Subscription.findAll({
  where: {
    user_uid: userUid,
  },
  limit: 5,
  include: IncludeSubscription,
});
