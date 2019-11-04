var express = require('express');
var router = express.Router();

/* GET new memos page. */
router.get('/new', function(req, res, next) {
  res.render('memos/new', { title: 'Express' });
});

module.exports = router;
