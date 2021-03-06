const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const {ensureAuthenticated} = require('../config/auth');
const Org = require('../models/Orphanage');
const { forwardAuthenticated } = require('../config/auth');

router.get('/login', forwardAuthenticated, (req, res) => res.render('orphanageLogin'));

router.get('/dashboard',ensureAuthenticated,(req ,res)=> res.render('orphDash'));

router.get('/register', forwardAuthenticated, (req, res) => res.render('orphanageRegister'));

router.post('/register', (req, res) => {
  const { name, email,manager, password, password2 ,phone ,description , address } = req.body;
 console.log({ name, email,manager, password, password2 ,description ,phone, address } )
  let errors = [];

  if (!name || !email || !password || !password2 || !manager || !description || !phone ||!address  ) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }
   if(phone.length > 10 ){
    errors.push({ msg : 'Phone no must be 10 digits only.'})
  }


  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      manager,
      password,
      password2,
      description ,
      phone, 
      address
    });
  } else {
    Org.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          name,
          email,
          password,
          password2,
          description ,
          phone,
           address
        });
      } else {
        const newOrg = new Org({
        'name':name,
          'email':email,
          'manager':manager,
          'password':password,
          'phone':phone,
          'description':description,
          'address':address
        });
          console.log(newOrg.password)
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newOrg.password, salt, (err, hash) => {
            if (err) throw err;
            newOrg.password = hash;
            newOrg
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/orphanage/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

router.post('/login', (req, res, next) => {
  passport.authenticate('orp', {
    //req.send('hey orphanage'),
    successRedirect: '/orphanage/dashboard',
    failureRedirect: '/orphanage/login',
    failureFlash: true
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/orphanage/login');
});

module.exports = router;
