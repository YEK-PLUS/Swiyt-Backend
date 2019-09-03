import _ from 'lodash';

export const FilterImage = (ImageModel) => {
  const image = ImageModel.toJSON();
  const filteredImage = _.pick(image, [
    'uid',
    'cdn_uid',
  ]);
  filteredImage.cdn = _.pick(image.cdn_datum, [
    'uid',
    'url',
  ]);
  return filteredImage;
};
export const FilterUserDetails = (UserDetailsModel) => {
  const UserDetails = UserDetailsModel.toJSON();
  const filteredUserDetails = _.pick(UserDetails, [
    'uid',
    'telephone',
    'telephone_verified',
    'telephone_code',
    'mail',
    'mail_verified',
    'mail_code',
    'firstname',
    'lastname',
    'biography',
    'summary',
    'location',
    'title',
    'picture_uid',
    'banner_uid',
    'links',
    'referance',
    'portfolio',
    'certificates',
    'experience',
    'education',
  ]);
  filteredUserDetails.banner = FilterImage(UserDetailsModel.banner);
  filteredUserDetails.picture = FilterImage(UserDetailsModel.picture);
  return filteredUserDetails;
};
export const FilterUser = (userModel) => {
  const user = userModel.toJSON();
  const filteredUser = _.pick(user, [
    'uid', 'username', 'realname',
  ]);
  filteredUser.image = FilterImage(userModel.image);
  return filteredUser;
};
export const FilterUserAndUserDetails = (userModel) => {
  const filteredUser = FilterUser(userModel);
  filteredUser.user_details = FilterUserDetails(userModel.user_detail);
  return filteredUser;
};
