import Models from '../model';
import IncludeUser from './user';
import IncludeLesson from './lesson';

const { Comment } = Models;
export default(props) => {
  const { opt, including } = props || {};
  const {
    userIncluding,
    userOpt,
    lessonIncluding,
    lessonOpt,
  } = including || {};
  const { where, required } = opt || {};

  const model = {
    model: Comment,
    include: [],
  };
  if (where) {
    model.where = where;
  }
  if (required) {
    model.required = true;
  }
  if (userIncluding) {
    model.include.push(IncludeUser(userOpt));
  }
  if (lessonIncluding) {
    model.include.push(IncludeLesson(lessonOpt));
  }

  return model;
};
