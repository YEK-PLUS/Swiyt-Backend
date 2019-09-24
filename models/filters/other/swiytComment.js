const _ = require('lodash');
import FilterImage from './image';

export default (referenceModel) => {
  const course = referenceModel.toJSON();
  const filteredReference = _.pick(course, [
    'id',
    'name',
    'user_comment',
  ]);
  filteredReference.image = FilterImage(referenceModel.image);
  return filteredReference;
};
