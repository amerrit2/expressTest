var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Recieved request: " + req.url);
  res.render('pages/login', {title: "Flow Pay"});
});

module.exports = router;
