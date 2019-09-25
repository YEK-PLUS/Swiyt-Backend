import Category from './category';
import CategoryConnector from './categoryConnector';
import Cdn from './cdn';
import Comment from './comment';
import Course from './course';
import HasCategories from './hasCategory';
import Images from './images';
import References from './references';
import Subscription from './subscription';
import SwiytComments from './swiytComments';
import User from './user';
import UserDetails from './userDetails';
import WhiteList from './whiteList';

Images.belongsTo(Cdn, { foreignKey: 'cdn_uid' });
HasCategories.belongsTo(Category, { foreignKey: 'category_uid' });

User.belongsTo(UserDetails, { foreignKey: 'uid' });
User.belongsTo(Images, { foreignKey: 'avatar_uid' });
User.hasMany(Course, { foreignKey: 'user_uid' });
User.hasMany(Comment, { foreignKey: 'users_uid' });
User.hasMany(WhiteList, { foreignKey: 'users_uid' });
User.hasMany(Subscription, { foreignKey: 'user_uid' });

Course.belongsTo(Images, { foreignKey: 'banner_uid', as: 'banner' });
Course.belongsTo(Images, { foreignKey: 'thub_uid', as: 'thub' });
Course.belongsTo(User, { foreignKey: 'user_uid', as: 'admin' });
Course.hasOne(HasCategories, { foreignKey: 'from_uid' });
Course.hasMany(Comment, { foreignKey: 'lessons_uid' });
Course.hasMany(Subscription, { foreignKey: 'lesson_uid' });
Course.hasMany(WhiteList, { foreignKey: 'lessons_uid' });

Comment.belongsTo(Course, { foreignKey: 'lessons_uid' });
Comment.belongsTo(User, { foreignKey: 'users_uid' });

WhiteList.belongsTo(User, { foreignKey: 'users_uid' });
WhiteList.belongsTo(Course, { foreignKey: 'lessons_uid' });

Subscription.belongsTo(User, { foreignKey: 'user_uid' });
Subscription.belongsTo(Course, { foreignKey: 'lesson_uid' });

Category.belongsTo(CategoryConnector, { foreignKey: 'uid', targetKey: 'from_uid' });
CategoryConnector.belongsTo(Category, { foreignKey: 'to_uid', targetKey: 'uid' });

UserDetails.belongsTo(Images, { foreignKey: 'picture_uid', as: 'picture' });
UserDetails.belongsTo(Images, { foreignKey: 'banner_uid', as: 'banner' });

References.belongsTo(Images, { foreignKey: 'images_uid' });
SwiytComments.belongsTo(Images, { foreignKey: 'images_uid' });
module.exports = {
  Category,
  CategoryConnector,
  Cdn,
  Comment,
  Course,
  HasCategories,
  Images,
  References,
  Subscription,
  SwiytComments,
  User,
  UserDetails,
  WhiteList,
};
