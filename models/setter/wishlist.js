import uuid from 'uuid/v4';
import WishList from '../model/whiteList';

export default (lessons_uid, users_uid, wish_list) => WishList.findOne({
  where: {
    lessons_uid,
    users_uid,
  },
}).then((wishList) => {
  if (wishList) {
    return wishList.update(wish_list);
  }
  const uid = uuid();

  const buildWishList = {
    uid,
    lessons_uid,
    users_uid,
    ...wish_list,
  };
  return WishList.build(buildWishList).save();
});
