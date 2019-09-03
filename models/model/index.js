import User from './user';
import UserDetails from './userDetails';
import Images from './images';
import Cdn from './cdn';

User.belongsTo(UserDetails, { foreignKey: 'uid' });

User.belongsTo(Images, { foreignKey: 'avatar_uid' });
Images.belongsTo(Cdn, { foreignKey: 'uid' });

UserDetails.belongsTo(Images, { foreignKey: 'picture_uid', as: 'picture' });
UserDetails.belongsTo(Images, { foreignKey: 'banner_uid', as: 'banner' });
module.exports = { User, UserDetails };
