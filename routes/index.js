var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Version 1.0' });
});

router.get('/beranda', function(req, res, next){
  res.render('index', { title: 'Beranda'});
})

module.exports = router;