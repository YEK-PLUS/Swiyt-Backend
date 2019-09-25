import Models from '../model';

import IncludeImage from'./image';
import IncludeUser from'./user';
import IncludeCategory from'./category';
import IncludeSubscription from'./subscription';
import IncludeComment from'./comment';
import IncludeWishList from'./wishList';
const { Course } = Models;
export default (props) => {
  const { including, opt } = props || {};
  const {
    subscriptionIncluding,
    subscriptionOpt,
    userIncluding,
    userOpt,
    commentIncluding,
    commentOpt,
    wishListIncluding,
    wishListOpt,
  } = including || {};
  const { where, required } = opt || {};

  const model = {
    model: Course,
    include: [
      IncludeImage('banner'),
      IncludeImage('thub'),
      IncludeCategory(),
    ],
  };
  if (required) {
    model.required = true;
  }
  if (where) {
    model.where = where;
  }
  if (subscriptionIncluding || subscriptionOpt) {
    model.include.push(IncludeSubscription(subscriptionOpt));
  }
  if (commentIncluding || commentOpt) {
    model.include.push(IncludeComment(commentOpt));
  }
  if (userIncluding || userOpt) {
    model.include.push(IncludeUser(userOpt));
  }
  if (wishListIncluding || wishListOpt) {
    model.include.push(IncludeWishList(wishListOpt));
  }
  return model;
};
