import { Router } from 'express';
import Models from '../models';

const {
  AllReferences,
} = Models;

const router = Router();
router.get('/', (req, res) => {
  res.status(200).send("it's working");
});
router.post('/references', (req, res) => AllReferences().then((references) => {
  res.status(200).send(references);
}));

module.exports = router;
