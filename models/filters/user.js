import _ from 'lodash';
export const JustMe = (userModel) => {
  let user = userModel.toJSON();
  let filteredUser = _.pick(user,[
    "uid","username","realname"
  ]);
  return filteredUser;
}
