import User from './user';
import UserDetails from './userDetails';

UserDetails.belongsTo(User, { foreignKey: 'uid' });
User.belongsTo(UserDetails, { foreignKey: 'uid' });

module.exports = { User, UserDetails };
