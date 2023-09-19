const express = require('express');

const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Message Board', messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', { title: 'Enter Your Message' });
});

router.post('/new', (req, res, next) => {
  const text = req.body.message;
  const user = req.body.name;
  console.log(req.body);
  messages.push({ text, user, added: new Date() });
  res.redirect('/');
});

module.exports = router;
