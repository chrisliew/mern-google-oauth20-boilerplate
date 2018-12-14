const express = require('express');
const router = express.Router();
const passport = require('passport');

require('../../service/passport');

// @route   GET /auth/google/
// @desc    Login Page for Google OAuth
// @access  Public
router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  })
);

// @route   GET /auth/google/callback
// @desc    Callback for Google OAuth
// @access  Private
router.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    // res.redirect('/');
    res.json({ sup: 'sup' });
  }
);

router.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

router.get('/api/logout', (req, res) => {
  req.logout();
  res.send(req.user);
});

module.exports = router;
