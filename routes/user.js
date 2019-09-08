import { Router } from 'express';
import auth from '../middlewares/auth';
import Models from '../models';

const {
  JustUserDetailsWithUserName,
} = Models;
const router = Router();

router.post('/userDetails', (req, res) => JustUserDetailsWithUserName(req.body.username).then((userDetail) => {
    res.status(200).send(userDetail).end();
}));

module.exports = router;
