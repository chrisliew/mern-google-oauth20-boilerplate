const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const mongoose = require('mongoose');

const keys = require('../config/keys');

// Pulls class of users from out of mongoose
const User = mongoose.model('users');

// user is the user pulled out of database in passport below. serialize User generates identifying piece of info
passport.serializeUser((user, done) => {
  // null is error, user.id is confusing because it is the user.id in the mongoose database. user.id is the cookie.
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // create a new user if no existing user. Reaching out to database, returns Async action, so must use promise.
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // null is error
        done(null, existingUser);
      } else {
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
    }
  )
);
