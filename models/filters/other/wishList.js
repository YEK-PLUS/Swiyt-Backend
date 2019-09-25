const _ = require('lodash');
import FilterUser from '../user/user';
import FilterCourse from '../course/course';

module.exports = (WishListModel) => {
  const wishList = WishListModel.toJSON();
  const filteredWishList = _.pick(wishList, [
    'uid',
    'lessons_uid',
    'users_uid',
    'wish_list',
    'card'
  ]);
  if (_.has(wishList, 'user')) {
    filteredWishList.user = FilterUser(WishListModel.user);
  }
  if (_.has(wishList, 'lesson')) {
    filteredWishList.lesson = FilterCourse(WishListModel.lesson);
  }
  return filteredWishList;
};
