 import { Router } from 'express';
import auth from '../middlewares/auth';
import Models from '../models';

const {
  PopulerCourses,
  AllPopulerCourses,
  Subscriptions,
  AllSubscriptions,
  FilterCourse,
  FilterSubscription,
  CourseDetail,
  FilterUserAndUserCourse,
  UpdateWishList
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
router.post('/subscriptions/all', auth, (req, res) => AllSubscriptions(req.user.uid).then((subscriptions) => {
  const a = [];
  subscriptions.map((b) => a.push(FilterSubscription(b)));
  return res.status(200).send(a).end();
}));
router.post('/wishList',auth, (req, res) => {
  let {wishList} = req.body;
  wishList = (wishList == 0 || wishList == 1) ? wishList : 0;
  UpdateWishList(req.body.lessonUid,req.user.uid,wishList).then((result) => {
    if(!result){
      return res.status(200).send(key.returns.error).end()
    }
    return res.status(200).send(key.returns.success).end();
  })
});
router.post('/', (req, res) => CourseDetail(req.body.user, req.body.course).then((course) => res.status(200).send(FilterUserAndUserCourse(course)).end()));
router.post('/auth',auth, (req, res) => CourseDetail(req.body.user, req.body.course,req.user.uid).then((course) => res.status(200).send(FilterUserAndUserCourse(course)).end()));
module.exports = router;
