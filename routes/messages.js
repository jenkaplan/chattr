// requires the Express node
const express = require('express');
// requires the Express router node
const router = express.Router();

// calls in the database
var models = require('../models/index');
// calls in auth-helpers file
var authHelpers = require('../auth/auth-helpers');

// authHelpers.loginRequired,
// route to the the messages page
router.get('/', authHelpers.loginRequired, function(req, res, next) {
  models.Messages.findAll({}).then(function(messages) {
    res.render('messages/index', {
      messages: messages
    });
  });
});

// posts data from the message form into the message table
router.post('/', function(req, res, next) {
  console.log('hit database');
  models.Messages.create({
    message: req.body.message,
    username: req.user.username
  }).then(function (messages) {
    res.redirect('/messages');
  });
});

// deletes the data when a user clicks delete
router.post('/:id', function(req, res, next) {
  models.Messages.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(messages) {
    res.redirect('/messages');
  });
});

function autoDelete(req, res, next) {
  models.sequelize.query('DELETE "Message".* FROM "Messages" WHERE "createdAt" < Now()')
};

module.exports = router;
