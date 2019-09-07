import User from './user';
import UserDetails from './userDetails';
import Images from './images';
import Cdn from './cdn';
import Course from './course';
import Subscription from './subscription';

User.belongsTo(UserDetails, { foreignKey: 'uid' });

User.belongsTo(Images, { foreignKey: 'avatar_uid' });
Images.belongsTo(Cdn, { foreignKey: 'cdn_uid' });

UserDetails.belongsTo(Images, { foreignKey: 'picture_uid', as: 'picture' });
UserDetails.belongsTo(Images, { foreignKey: 'banner_uid', as: 'banner' });

Course.belongsTo(Images, { foreignKey: 'banner_uid', as: 'banner' });
Course.belongsTo(Images, { foreignKey: 'thub_uid', as: 'thub' });

Course.belongsTo(User, { foreignKey: 'user_uid', as: 'admin' });

Subscription.belongsTo(Course, { foreignKey: 'lesson_uid' });


module.exports = {
  User, UserDetails, Course, Subscription,
};
