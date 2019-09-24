const _ = require('lodash');
import FilterUser from '../user/user';
import FilterImage from '../other/image';
import FilterCategory from '../other/category';
import FilterComment from '../other/comment';
import FilterWishList from '../other/wishList';

export default (CourseModel) => {
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
  filteredCourse.subscriptions = _.size(CourseModel.subscriptions);
  filteredCourse.banner = FilterImage(CourseModel.banner);
  filteredCourse.thub = FilterImage(CourseModel.thub);
  filteredCourse.category = FilterCategory(CourseModel.has_category);

  if (_.has(course, 'admin')) {
    filteredCourse.admin = FilterUser(CourseModel.admin);
  }
  if (_.has(course, 'lesson_comments')) {
    const rates = [];
    filteredCourse.comments = [];
    CourseModel.lesson_comments.map((comment) => {
      filteredCourse.comments.push(FilterComment(comment));
      rates.push(comment.star);
      return true;
    });
    filteredCourse.rate = _.mean(rates);
  }
  if (_.has(course, 'wish_lists') && course.wish_lists[0]) {
    filteredCourse.wishList = FilterWishList(CourseModel.wish_lists[0]);
  }
  return filteredCourse;
};
