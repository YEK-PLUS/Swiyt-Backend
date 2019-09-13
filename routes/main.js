import { Router } from 'express';
import Models from '../models';

const {
  AllReferences, FilterReferance, AllSwiytComments, FilterSwiytComment,
} = Models;

const router = Router();
router.get('/', (req, res) => {
  res.status(200).send("it's working");
});
router.post('/references', (req, res) => AllReferences().then((references) => {
  const returnReferences = [];
  references.map((reference) => returnReferences.push(FilterReferance(reference)));
  res.status(200).send((returnReferences));
}));
router.post('/swiytComments', (req, res) => AllSwiytComments().then((comments) => {
  const returnComments = [];
  comments.map((comment) => returnComments.push(FilterSwiytComment(comment)));
  res.status(200).send((returnComments));
}));

module.exports = router;
