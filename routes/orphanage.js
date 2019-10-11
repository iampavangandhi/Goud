const express = require('express');
const router =  express.Router();
const Orphanage = require('../models/Orphanage');

const {ensureAuthenticated} = require('../config/auth');

router.get('/api/orphanage',ensureAuthenticated, (req,res)=> {
    
});