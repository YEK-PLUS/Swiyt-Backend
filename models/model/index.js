import User from './user';
import UserDetails from './userDetails';
import Images from './images';
import Cdn from './cdn';
import Course from './course';
import Subscription from './subscription';
import References from './references';
import SwiytComments from './swiytComments';
import Category from './category';
import Comment from './comment';
import CategoryConnector from './categoryConnector';
import HasCategories from './hasCategory';
import WhiteList from './whiteList';

User.belongsTo(UserDetails, { foreignKey: 'uid' });

References.belongsTo(Images, { foreignKey: 'images_uid' });
SwiytComments.belongsTo(Images, { foreignKey: 'images_uid' });

User.belongsTo(Images, { foreignKey: 'avatar_uid' });
Images.belongsTo(Cdn, { foreignKey: 'cdn_uid' });

UserDetails.belongsTo(Images, { foreignKey: 'picture_uid', as: 'picture' });
UserDetails.belongsTo(Images, { foreignKey: 'banner_uid', as: 'banner' });

Course.belongsTo(Images, { foreignKey: 'banner_uid', as: 'banner' });
Course.belongsTo(Images, { foreignKey: 'thub_uid', as: 'thub' });
Course.hasOne(HasCategories, { foreignKey: 'from_uid' });
Comment.belongsTo(Course, { foreignKey: 'lessons_uid' });
Course.hasMany(Comment, { foreignKey: 'lessons_uid' });

Course.belongsTo(User, { foreignKey: 'user_uid', as: 'admin' });
User.hasMany(Course, { foreignKey: 'user_uid' });
Comment.belongsTo(User, { foreignKey: 'users_uid' });
User.hasMany(Comment, { foreignKey: 'users_uid' });

Subscription.belongsTo(User, { foreignKey: 'user_uid' });
User.hasMany(Subscription, { foreignKey: 'user_uid' });
Subscription.belongsTo(Course, { foreignKey: 'lesson_uid' });
Course.hasMany(Subscription, { foreignKey: 'lesson_uid' });

WhiteList.belongsTo(User, { foreignKey: 'users_uid' });
User.hasMany(WhiteList, { foreignKey: 'users_uid' });
WhiteList.belongsTo(Course, { foreignKey: 'lessons_uid' });
Course.hasMany(WhiteList, { foreignKey: 'lessons_uid' });

HasCategories.belongsTo(Category, { foreignKey: 'category_uid' });
Category.belongsTo(CategoryConnector, { foreignKey: 'uid', targetKey: 'from_uid' });
CategoryConnector.belongsTo(Category, { foreignKey: 'to_uid', targetKey: 'uid' });

module.exports = {
  User, UserDetails, Course, Subscription, Cdn, Images, References,
};
