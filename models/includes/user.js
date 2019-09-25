import Models from '../model';

import IncludeImage from './image';
import IncludeUserDetail from './userDetails';
import IncludeSubscription from './subscription';
import IncludeLesson from './lesson';
const { User } = Models;
export default (props) => {
  const { opt,including } = props || {}
  const {
    userDetailIncluding,
    userDetailOpt,
    subscriptionIncluding,
    subscriptionOpt,
    lessonIncluding,
    lessonOpt,
  } = including || {};
  const { asAdmin, where, required } = opt || {};

  const model = {
    model: User,
    include: [IncludeImage()],
  };

  if (asAdmin) {
    model.as = 'admin';
  }
  if (where) {
    model.where = where;
  }
  if (required) {
    model.required = true;
  }
  if (userDetailIncluding || userDetailOpt) {
    model.include.push(IncludeUserDetail(userDetailOpt));
  }
  if (subscriptionIncluding || subscriptionOpt) {
    model.include.push(IncludeSubscription(subscriptionOpt));
  }
  if (lessonIncluding || lessonOpt) {
    model.include.push(IncludeLesson(lessonOpt));
  }
  return model;
};
