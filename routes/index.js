var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//this redirects to main flights index (home page)
router.get('/', function(req, res, next) {
  res.redirect('/flights');
});

module.exports = router;
