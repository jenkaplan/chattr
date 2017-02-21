const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const models = require('../models/index');
const authHelpers = require('../auth/auth-helpers');

const options = {};

init();

passport.use(new LocalStrategy(options, (username, password, done) => {
  models.User.findAll({
    where: {
      username
    }
  })
  .then((user) => {
    if (user[0] === undefined) {
      return done(null, false);
    }
    if (!authHelpers.comparePass(password, user[0].dataValues.password)) {
      return done(null, false);
    } else {
      return done(null, user[0].dataValues);
    }
  })
  .catch((err) => { return done(err); });
}));

module.exports = passport;
