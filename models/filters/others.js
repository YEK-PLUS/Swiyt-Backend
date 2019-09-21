import _ from 'lodash';
import { FilterImage, FilterUser } from './user';

export const FilterReferance = (referenceModel) => {
  const course = referenceModel.toJSON();
  const filteredReference = _.pick(course, [
    'id',
    'name',
    'url',
  ]);
  filteredReference.image = FilterImage(referenceModel.image);
  return filteredReference;
};
export const FilterComment = (CommentModel) => {
  const comment = CommentModel.toJSON();
  const filteredComment = _.pick(comment, [
    'uid',
    'comment',
    'star',
  ]);
  filteredComment.user = FilterUser(CommentModel.user);
  return filteredComment;
};
export const FilterWishList = (WishListModel) => {
  const wishList = WishListModel.toJSON();
  const filteredWishList = _.pick(wishList, [
    'uid',
    'lessons_uid',
    'users_uid',
    'wish_list',
  ]);
  return filteredWishList;
};
export const FilterSwiytComment = (referenceModel) => {
  const course = referenceModel.toJSON();
  const filteredReference = _.pick(course, [
    'id',
    'name',
    'user_comment',
  ]);
  filteredReference.image = FilterImage(referenceModel.image);
  return filteredReference;
};
export const FilterCategory = (CategoryModel) => {
  const category = CategoryModel.category.toJSON();
  const filter = (cat) => _.pick(cat, [
    'uid',
    'name',
  ]);
  const filterCategory = filter(category);
  if (category.categories_connector) {
    filterCategory.parent = filter(category.categories_connector.category);
  }
  if (category.categories_connector.category.categories_connector) {
    filterCategory.parent.parent = filter(
      category.categories_connector.category.categories_connector.category,
    );
  }
  return filterCategory;
};
