const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('form', { title: 'Enter Your Message' });
});

module.exports = router;
