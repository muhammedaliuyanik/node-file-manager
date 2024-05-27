//ways related to user operations.

const express = require('express');
const router = express.Router();

// Örnek GET rotası
router.get('/', (req, res) => {
  res.send('User routes');
});

module.exports = router;
