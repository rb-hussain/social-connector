const express = require('express');
const router = express.Router();

// @route   GET api/profile
// @desc    Get all profile
// @access  Public
router.get('/', (req, res) => {
  res.send('Get all profile');
});

module.exports = router;