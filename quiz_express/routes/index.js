var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'QUIZ 2019' });
});

/* GET quizzes */
router.get('/quizzes', quizController.index);

/*GET Credits*/
router.get('/credits',function(req, res, next) {
	res.render('credits', {title: 'Credits'});
});

module.exports = router;
