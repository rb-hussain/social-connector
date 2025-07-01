const express = require('express');
const router = express.Router();

// @route   GET api/post
// @desc    Get all post
// @access  Public
router.get('/', (req, res) => {
  res.send('Get all post');
});

module.exports = router;