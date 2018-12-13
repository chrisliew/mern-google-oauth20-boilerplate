const express = require('express');
const router = express.Router();

// @route   GET /auth/google/test
// @desc    Test
// @access  Public
router.get('/test', (req, res) => {
  res.json({ test: 'test' });
});

// @route   GET /auth/google/
// @desc    Login Page for Google OAuth
// @access  Public

// router.get('/');

module.exports = router;
