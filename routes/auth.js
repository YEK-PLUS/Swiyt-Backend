import { Router } from 'express';
import jwt from 'jsonwebtoken';
import uuid from 'uuid/v1';
import auth from '../middlewares/auth';
import Models from '../models';

const {
  JustUser, JustUserWithUserName, User, UserDetails, JustMe,
} = Models;
const router = Router();

router.post('/token', (req, res) => {
  const { username } = req.body;
  const { password } = req.body;
  if (!password || !username) {
    return res.status(200).send(key.returns.requiredFields).end();
  }
  return JustUser(username, password).then((user) => {
    if (!user) {
      return res.status(200).send(key.returns.userNotFound).end();
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
  res.status(200).send(JustMe(req.user)).end();
});
router.post('/logout',auth, (req, res) => {
	req.logout();
	res.status(200).send(key.returns.success);
});
router.post('/register', (req, res) => {
  const { username, password, mail } = req.body;
  if (!username || !password || !mail) {
    return res.status(200).send(key.returns.requiredFields).end();
  }
  return JustUserWithUserName(username).then((user) => {
    if (user != null) {
      return res.status(200).send(key.returns.userExists).end();
    }
    const uid = uuid();
    const buildUser = {
      uid,
      username,
      password,
    };
    const mail_verified = false;
    const buildUserDetails = {
      uid,
      mail,
      mail_verified,
    };
    User.build(buildUser).save();
    UserDetails.build(buildUserDetails).save();
    return res.send(200, key.returns.success).end();
  });
});

module.exports = router;
