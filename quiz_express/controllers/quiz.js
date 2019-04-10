const sequelize = require('../models/index.js');

// GET /quizzes
exports.index = (req, res, next) => {
    title = 'Lista de Quizzes'
    sequelize.models.quiz.findAll()
    .then(quizzes => {
        res.render('quizzes/index.ejs', {quizzes,title} );
    })
    .catch(error => next(error));
};