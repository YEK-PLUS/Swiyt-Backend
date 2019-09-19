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
  ]);
  filteredComment.user = FilterUser(CommentModel.user);
  return filteredComment;
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
