const _ = require('lodash');
import FilterImage from '../other/image';

export default (UserDetailsModel) => {
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
  ]);
  filteredUserDetails.links = JSON.parse(UserDetails.links);
  filteredUserDetails.referance = JSON.parse(UserDetails.referance);
  filteredUserDetails.portfolio = JSON.parse(UserDetails.portfolio);
  filteredUserDetails.education = JSON.parse(UserDetails.education);
  filteredUserDetails.experience = JSON.parse(UserDetails.experience);
  filteredUserDetails.certificates = JSON.parse(UserDetails.certificates);
  filteredUserDetails.banner = FilterImage(UserDetailsModel.banner);
  filteredUserDetails.picture = FilterImage(UserDetailsModel.picture);
  return filteredUserDetails;
};
