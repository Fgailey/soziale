const express = require('express');
const router = express.Router();
var vidyoToken = require('../generateToken')
var cors = require('cors')


const config = require('config');
const { check, validationResult } = require('express-validator');

router.get('/getToken', cors() ,function (req,res){
  var key = vidyoToken(req.body.username,1000, "");
    // console.log(req.body)
res.json({token: key })
})




module.exports = router;
