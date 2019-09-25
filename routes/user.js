import { Router } from 'express';
import auth from '../middlewares/auth';
import Models from '../models';
import ModelFix from '../middlewares/modelFix'

const {
  JustUser,
  FilterUser,
} = Models;
const router = Router();

router.post('/userDetails', (req, res) => JustUser({
  opt: {
    where: { username: req.body.username },
  },
  including: {
    userDetailIncluding: true,
  },
}).then((userDetail) => {
  if (!userDetail) {
    return res.status(200).send(key.returns.userNotFound).end();
  }
  return res.status(200).send(FilterUser(userDetail)).end();
}));
router.post('/populer/all', (req, res) => JustUser('findAndCountAll', {
  including: {
    lessonIncluding: true,
    lessonOpt: {
      opt: {
        required: true,
      },
    },
  },
}).then((usersModel) => {
  const users = [];
  ModelFix(usersModel).model.map((user) => users.push(FilterUser(user)))
  res.status(200).send((users)).end();
}));
router.post('/populer', (req, res) => JustUser('findAndCountAll', {
  including: {
    lessonIncluding: true,
    lessonOpt: {
      opt: {
        required: true,
      },
    },
  },
}).then((usersModel) => {
  const users = [];
  ModelFix(usersModel).model.map((user) => users.push(FilterUser(user)))
  res.status(200).send((users)).end();
}));

module.exports = router;
