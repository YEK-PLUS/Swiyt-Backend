import User from './user';
import UserDetails from './userDetails';
import Images from './images';
import Cdn from './cdn';

UserDetails.belongsTo(User, { foreignKey: 'uid' });
User.belongsTo(UserDetails, { foreignKey: 'uid' });

User.belongsTo(Images, { foreignKey: 'avatar_uid' });
Images.belongsTo(Cdn, { foreignKey: 'uid' });

module.exports = { User, UserDetails };
