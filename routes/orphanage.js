const express = require('express');
const router =  express.Router();
const Orphanage = require('../models/Orphanage');

const {ensureAuthenticated} = require('../config/auth');

router.get('/dashboard',ensureAuthenticated,(req ,res)=> res.render('orphDash'));

router.post('/dashboard',ensureAuthenticated,(req,res) => {

});

module.exports = router;