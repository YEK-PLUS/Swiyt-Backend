import _ from 'lodash';
import { FilterImage } from './user';

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
