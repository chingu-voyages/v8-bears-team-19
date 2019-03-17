const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  // TODO: Change below code with database code
  // Get all recipes
  res.json('Hello from recipes route');
});

router.post('/', function(req, res) {
  // TODO: Change below code with database code
  // Add new recipe
  res.json(req.body);
});

module.exports = router;