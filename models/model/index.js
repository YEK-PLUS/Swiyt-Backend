import User from './user';
import UserDetails from './userDetails';
import Images from './images';
import Cdn from './cdn';
import Course from './course';
User.belongsTo(UserDetails, { foreignKey: 'uid' });

User.belongsTo(Images, { foreignKey: 'avatar_uid' });
Images.belongsTo(Cdn, { foreignKey: 'uid' });

UserDetails.belongsTo(Images, { foreignKey: 'picture_uid', as: 'picture' });
UserDetails.belongsTo(Images, { foreignKey: 'banner_uid', as: 'banner' });

Course.belongsTo(Images, { foreignKey: 'banner_uid', as: 'banner' });
Course.belongsTo(Images, { foreignKey: 'thub_uid', as: 'thub' });

Course.belongsTo(User, { foreignKey: 'user_uid', as: 'admin' });

module.exports = { User, UserDetails,Course };
