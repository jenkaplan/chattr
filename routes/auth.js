// requires the Express node
const express = require('express');
// requires the Express router node
const router = express.Router();

// requires the authHelpers file
const authHelpers = require('../auth/auth-helpers');
// requires the local file
const passport = require('../auth/local');

// renders the register page
router.get('./register', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register');
});

// allows the user the create an account and sends the data to the user table
router.post('/register', (req, res, next) => {
  return authHelpers.createUser(req, res)
  .then((response) => {
    console.log('registration successful');
  })
  .catch((err) => { res.status(500).json({ status: 'error' }); });
});

// loads the login page
router.get('/login', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/login');
});

// route handler based on if the user is logged in
router.post('/login', passport.authenticate('local', {
    successRedirect: '/messages',
    failureRedirect: '/auth/login',
    failureFlash: true
  })
);

// logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
