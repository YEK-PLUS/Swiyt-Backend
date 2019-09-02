import { Router } from 'express';
import jwt from 'jsonwebtoken';
import uuid from 'uuid/v1';
import auth from '../middlewares/auth';
import Models from '../models';

const {
  JustUser, JustUserWithUserName, User, UserDetails,
} = Models;
const router = Router();

router.post('/token', (req, res) => {
  const { username } = req.body;
  const { password } = req.body;
  if (!password || !username) {
    return res.status(200).send(key.returns.requiredFields).end();
  }
  return JustUser(username, password).then((user) => {
    const payload = { uid: user.uid };
    const token = jwt.sign(payload, key.JWTkey);
    const body = {
      token,
    };
    return res.status(200).send(body).end();
  });
});
router.post('/login', auth, (req, res) => {
  res.status(200).send(req.user).end();
});

module.exports = router;
