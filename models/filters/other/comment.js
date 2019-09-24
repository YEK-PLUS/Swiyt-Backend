const _ = require('lodash');
import FilterUser from '../user/user';
import FilterCourse from '../course/course';

export default (CommentModel) => {
  const comment = CommentModel.toJSON();
  const filteredComment = _.pick(comment, [
    'uid',
    'comment',
    'star',
  ]);
  if (_.has(comment, 'user')) {
    filteredComment.user = FilterUser(CommentModel.user);
  }
  if (_.has(comment, 'lesson')) {
    filteredComment.lesson = FilterCourse(CommentModel.lesson);
  }
  return filteredComment;
};
