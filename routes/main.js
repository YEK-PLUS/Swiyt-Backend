import { Router } from 'express';
import Models from '../models';

const {
  AllReferences, FilterReferance,
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

module.exports = router;
