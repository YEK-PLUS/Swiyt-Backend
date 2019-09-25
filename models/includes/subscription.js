import Models from '../model';

import IncludeLesson from './lesson';
import IncludeUser from './user';

const { Subscription } = Models;
export default (props) => {
  const model = {
    model: Subscription,
    include: [],
  };
  if (props) {
    const { including, opt } = props || {};
    const {
      lessonIncluding,
      lessonOpt,
      userIncluding,
      userOpt,
    } = including || {};
    const { where, required } = opt || {};

    if (required) {
      model.required = true;
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
  }
  return model;
};
