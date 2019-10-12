const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const kid = require('../models/Kid');

router.get('/', forwardAuthenticated, (req, res) => {
  var data;
  kid.find().then( data =>
    res.render('welcome',{
      kid : data
    })
  )
  
});

router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

module.exports = router;
