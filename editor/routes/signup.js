var express = require('express');
var router = express.Router();
var collection = require( '../mongo' );
var Messages = require('../constant').Messages;


/**
 * GET: /signup
 */
router.get('/', function(req, res, next) {
  //console.log("http get: /signup", util.getLastCall());
  console.log("http get: /signup");
  
  // rendering view of signup
  res.params.title = 'サインアップ';
  return res.render('signup', res.params);
});





module.exports = router;