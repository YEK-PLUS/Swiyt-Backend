import * as Includes from '../includes';
import WishList from '../model/whiteList';

export const UpdateWishList = (lessons_uid,users_uid,wish_list) => WishList.findOne({
  where:{
    lessons_uid,
    users_uid
  }
}).then((wishList) => {
    if (wishList) {
      return wishList.update({
        wish_list
      })
    }
  })
