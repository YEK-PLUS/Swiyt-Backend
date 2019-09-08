import { Router } from 'express';
import auth from '../middlewares/auth';
import Models from '../models';

const {
  JustUserDetailsAndCourseWithUserName,FilterUserAndUserDetailsAndUserCourse
} = Models;
const router = Router();

router.post('/userDetails', (req, res) => JustUserDetailsAndCourseWithUserName(req.body.username).then((userDetail) => {
  res.status(200).send(FilterUserAndUserDetailsAndUserCourse(userDetail)).end();
}));

module.exports = router;
