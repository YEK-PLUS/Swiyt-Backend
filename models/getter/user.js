import User from '../model/user';
import * as Includes from '../includes';

const { IncludeUser } = Includes;
const JustUser = (all, props) => {
  const re_props = typeof all === 'string' ? props : all;
  const re_all = typeof all !== 'string' ? 'findOne' : all;
  return User[re_all](IncludeUser(re_props));
};

module.exports = {
  JustUser,
};
