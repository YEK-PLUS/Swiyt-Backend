import _ from 'lodash';
import { FilterUser, FilterImage } from './user';
import { FilterCategory } from './others';

export const FilterCourse = (CourseModel) => {
  const course = CourseModel.toJSON();
  const filteredCourse = _.pick(course, [
    'uid',
    'user_uid',
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
  filteredCourse.category = [];
  CourseModel.has_categories.map((courseMap) => {
    filteredCourse.category.push(FilterCategory(courseMap));
    return filteredCourse;
  });
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
