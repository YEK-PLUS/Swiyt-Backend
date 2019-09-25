import Models from '../model';
import IncludeUser from './user';
import IncludeLesson from './lesson';


const { WhiteList } = Models;
export default (props) => {
  const { including, opt } = props || {};
  const {
    lessonIncluding,
    lessonOpt,
    userIncluding,
    userOpt,
  } = including || {};
  const { where, required } = opt || {};
  const model = {
    model: WhiteList,
    include: [],
  };
  if (required == false || required == true) {
    model.required = required;
  }
  if (where) {
    model.where = where;
  }

  if (userIncluding || userOpt) {
    model.include.push(IncludeUser(userOpt));
  }
  if (lessonIncluding || lessonOpt) {
    model.include.push(IncludeLesson(lessonOpt));
  }
  return model;
};
