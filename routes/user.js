import { Router } from 'express';
import auth from '../middlewares/auth';
import Models from '../models';

const {
  JustUserDetailsWithUserName,FilterUserAndUserDetails
} = Models;
const router = Router();

router.post('/userDetails', (req, res) => JustUserDetailsWithUserName(req.body.username).then((userDetail) => {
  res.status(200).send(FilterUserAndUserDetails(userDetail)).end();
}));

module.exports = router;
 
