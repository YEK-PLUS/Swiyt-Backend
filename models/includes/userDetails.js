import Models from '../model';

import IncludeImage from './image';
import IncludeUser from './user';

const { UserDetails } = Models;
export default (props) => {
  const { including, opt } = props || {};
  const {
    userIncluding,
    userOpt,
  } = including || {};
  const { where, required } = opt || {};

  const model = {
    model: UserDetails,
    include: [
      IncludeImage('banner'),
      IncludeImage('picture'),
    ],
  };
  if (required) {
    model.required = true;
  }
  if (where) {
    model.where = where;
  }
  if (userIncluding || userOpt) {
    model.include.push(IncludeUser(userOpt));
  }
  return model;
};
