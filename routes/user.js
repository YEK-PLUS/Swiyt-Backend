import { Router } from 'express';
import auth from '../middlewares/auth';
import Models from '../models';

const {
  JustUserDetailsAndCourseWithUserName,FilterUserAndUserDetailsAndUserCourse,JustPopulerUser,FilterUser
} = Models;
const router = Router();

router.post('/userDetails', (req, res) => JustUserDetailsAndCourseWithUserName(req.body.username).then((userDetail) => {
  res.status(200).send(FilterUserAndUserDetailsAndUserCourse(userDetail)).end();
}));
router.post('/populer', (req, res) => JustPopulerUser().then((usersModel) => {
  let users = [];
  usersModel.map(user => {
    return users.push(FilterUser(user));
  });
  res.status(200).send((users)).end();
}));

module.exports = router;
