const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth-helpers');

router.get('/', authHelpers.loginRequired, (req, res, next) => {
  res.render('user/index', {
    user: req.user.dataValues
  });
});

module.exports = router;
