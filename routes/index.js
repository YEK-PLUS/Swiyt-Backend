const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send(200, 'express').end();
});

module.exports = router;
