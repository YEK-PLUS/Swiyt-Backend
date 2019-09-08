import { Router } from 'express';
import jwt from 'jsonwebtoken';
import uuid from 'uuid/v1';
import auth from '../middlewares/auth';
import Models from '../models';

const {
  JustUser, JustUserWithUserName, User, UserDetails, FilterUser,Cdn,Images
} = Models;
const router = Router();

router.post('/token', (req, res) => {
  const { username } = req.body;
  const { password } = req.body;
  if (!password || !username) {
    return res.status(403).send(key.returns.requiredFields).end();
  }
  return JustUser(username, password).then((user) => {
    if (!user) {
      return res.status(403).send(key.returns.userNotFound).end();
    }
    const payload = { uid: user.uid };
    const token = jwt.sign(payload, key.JWTkey);
    const body = {
      token,
    };
    return res.status(200).send(body).end();
  });
});
router.post('/login', auth, (req, res) => {
  res.status(200).send(FilterUser(req.user)).end();
});
router.post('/logout', auth, (req, res) => {
  req.logout();
  res.status(200).send(key.returns.success);
});
router.post('/register', (req, res) => {
  const { username, password, mail } = req.body;
  if (!username || !password || !mail) {
    return res.status(403).send(key.returns.requiredFields).end();
  }
  return JustUserWithUserName(username).then((user) => {
    if (user != null) {
      return res.status(403).send(key.returns.userExists).end();
    }
    const uid = uuid();
    const avatarUid = uuid();
    const avatarUidCdn = uuid();

    const bannerUid = uuid();
    const bannerUidCdn = uuid();

    const buildUser = {
      uid,
      username,
      password,
      avatar_uid:avatarUid,
    };
    const buildUserDetails = {
      uid,
      mail,
      picture_uid:avatarUid,
      banner_uid:bannerUid,
    };
    const buildUserAvatarImage = {
      uid:avatarUid,
      cdn_uid:avatarUidCdn
    }
    const buildUserAvatarCdn = {
      uid:avatarUidCdn,
      url:"https://dummyimage.com/400x400/141414/fff&text="+username.substring(0,2)
    }
    const buildUserBannerImage = {
      uid:bannerUid,
      cdn_uid:bannerUidCdn
    }
    const buildUserBannerCdn = {
      uid:bannerUidCdn,
    }
    Cdn.build(buildUserAvatarCdn).save();
    Cdn.build(buildUserBannerCdn).save();

    Images.build(buildUserAvatarImage).save();
    Images.build(buildUserBannerImage).save();

    User.build(buildUser).save();
    UserDetails.build(buildUserDetails).save();

    return res.send(201, key.returns.success).end();
  });
});

module.exports = router;
