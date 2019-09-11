import { Router } from 'express';
import auth from '../middlewares/auth';
import Models from '../models';

const {
  JustUserDetailsAndCourseWithUserName,
  FilterUserAndUserDetailsAndUserCourse,
  JustAllPopulerUserAndCourses,
  JustPopulerUserAndCourses,
  FilterUserAndUserCourse,
} = Models;
const router = Router();

router.post('/userDetails', (req, res) => JustUserDetailsAndCourseWithUserName(req.body.username).then((userDetail) => {
  res.status(200).send(FilterUserAndUserDetailsAndUserCourse(userDetail)).end();
}));
router.post('/populer/all', (req, res) => JustAllPopulerUserAndCourses().then((usersModel) => {
  const users = [];
  usersModel.rows.map((user) => users.push(FilterUserAndUserCourse(user)));
  res.status(200).send((users)).end();
}));
router.post('/populer', (req, res) => JustPopulerUserAndCourses().then((usersModel) => {
  const users = [];
  usersModel.rows.map((user) => users.push(FilterUserAndUserCourse(user)));
  res.status(200).send((users)).end();
}));

module.exports = router;
