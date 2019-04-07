var express = require('express');
var router = express.Router();
 var multer = require('multer');
 var shotid=require('shortid');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add_hotel', function(req, res, next) {
  res.render('hotels/add_from.hbs', { title: 'Express' });
});
router.get('/edit_hotel', function(req, res, next) {
    res.render('hotels/edit_hotel', { title: 'Express' });
});

module.exports = router;
