import _ from 'lodash';
import { FilterUser, FilterImage } from './user';
import { FilterCategory, FilterComment } from './others';

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
  filteredCourse.comments = [];
  filteredCourse.subscriptions = _.size(CourseModel.subscriptions);
  CourseModel.lesson_comments.map((comment) => {
    filteredCourse.comments.push(FilterComment(comment));
  });
  filteredCourse.admin = FilterUser(CourseModel.admin);
  filteredCourse.banner = FilterImage(CourseModel.banner);
  filteredCourse.thub = FilterImage(CourseModel.thub);
  filteredCourse.category = FilterCategory(CourseModel.has_category);
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
export const FilterSubscriptionUser = (SubscriptionModel) => {
  const subscriptions = SubscriptionModel.toJSON();
  const filteredSubscriptions = _.pick(subscriptions, [
    'uid',
    'user_uid',
    'lesson_uid',
  ]);
  return filteredSubscriptions;
};
