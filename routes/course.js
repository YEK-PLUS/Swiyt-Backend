import { Router } from 'express';
import jwt from 'jsonwebtoken';
import uuid from 'uuid/v1';
import auth from '../middlewares/auth';
import Models from '../models';

const {
  PopulerCourses,Subscriptions,FilterCourse,FilterSubscription
} = Models;
const router = Router();

router.post('/populer', (req, res) => {
  return PopulerCourses().then(courses => {
    let a = [];
    courses.map(b=>a.push(FilterCourse(b)));
    return res.status(200).send(a).end();
  });
});
router.post('/subscriptions',auth, (req, res) => {
  return Subscriptions(req.user.uid).then(subscriptions => {
    let a = [];
    subscriptions.map(b=>a.push(FilterSubscription(b)));
    return res.status(200).send(a).end();
  });
});
module.exports = router;
