import _ from 'lodash';

import FilterCourse from '../course/course';
import FilterImage from '../other/image';
import FilterUserDetails from './userDetails';
export default (userModel) => {
  const user = userModel.toJSON();
  const filteredUser = _.pick(user, [
    'uid', 'username', 'realname',
  ]);
  filteredUser.image = FilterImage(userModel.image);
  if (_.has(user, 'user_detail')) {
    filteredUser.userDetails = FilterUserDetails(userModel.user_detail);
  }
  if (_.has(user, 'lessons')) {
    filteredUser.lessons = [];
    userModel.lessons.map((course) => filteredUser.lessons.push(FilterCourse(course)));
  }
  return filteredUser;
};
