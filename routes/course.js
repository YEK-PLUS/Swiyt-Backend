import { Router } from 'express';
import jwt from 'jsonwebtoken';
import uuid from 'uuid/v1';
import auth from '../middlewares/auth';
import Models from '../models';

const {
  PopulerCourses,FilterCourse
} = Models;
const router = Router();

router.post('/populer', (req, res) => {
  return PopulerCourses().then(courses => {
    let a = [];
    courses.map(b=>a.push(FilterCourse(b)));
    return res.status(200).send(a).end();
  });
});
module.exports = router;
