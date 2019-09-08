import { Router } from 'express';
import auth from '../middlewares/auth';
import Models from '../models';

const {
  PopulerCourses,AllPopulerCourses, Subscriptions, FilterCourse, FilterSubscription,
} = Models;
const router = Router();

router.post('/populer', (req, res) => PopulerCourses().then((courses) => {
  const a = [];
  courses.map((b) => a.push(FilterCourse(b)));
  return res.status(200).send(a).end();
}));
router.post('/populer/all', (req, res) => AllPopulerCourses().then((courses) => {
  const a = [];
  courses.map((b) => a.push(FilterCourse(b)));
  return res.status(200).send(a).end();
}));
router.post('/subscriptions', auth, (req, res) => Subscriptions(req.user.uid).then((subscriptions) => {
  const a = [];
  subscriptions.map((b) => a.push(FilterSubscription(b)));
  return res.status(200).send(a).end();
}));
module.exports = router;
