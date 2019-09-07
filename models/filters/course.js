import _ from 'lodash';
import * as UserFilters from './user';
const {FilterUser,FilterImage} = UserFilters
export const FilterCourse = (CourseModel) => {
  const course = CourseModel.toJSON();
  const filteredCourse = _.pick(course, [
    'uid',
    'user_uid',
    'dates_uid',
    'thub_uid',
    'banner_uid',
    'price',
    'name',
    'description',
    'lenght',
  ]);
  filteredCourse.admin = FilterUser(CourseModel.admin);
  filteredCourse.banner = FilterImage(CourseModel.banner);
  filteredCourse.thub = FilterImage(CourseModel.thub);
  return filteredCourse;
};
export const FilterSubscription = (SubscriptionModel) => {
  const subscriptions = SubscriptionModel.toJSON();
  const filteredSubscriptions = _.pick(subscriptions, [
    'uid',
    'user_uid',
    'lesson_uid',
  ]);
  filteredSubscriptions.lesson = FilterCourse(SubscriptionModel.lesson);
  return filteredSubscriptions;
};