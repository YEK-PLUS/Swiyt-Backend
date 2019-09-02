import _ from 'lodash';

export const JustMe = (userModel) => {
  const user = userModel.toJSON();
  const filteredUser = _.pick(user, [
    'uid', 'username', 'realname',
  ]);
  filteredUser.image = _.pick(user.image, [
    'uid',
    'cdn_uid',
  ]);
  filteredUser.image.cdn = _.pick(user.image.cdn_datum, [
    'uid',
    'url',
  ]);
  return filteredUser;
};
