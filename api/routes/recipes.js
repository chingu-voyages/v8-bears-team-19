const express = require('express');
const router = express.Router();

// Get all recipes endpoint
router.get('/', function(req, res) {
  // TODO: Change below code with database code
  // Get all recipes
  res.json('Hello from recipes route');
});

// Post a new recipe endpoint
router.post('/', function(req, res) {
  // TODO: Change below code with database code
  // Add new recipe
  res.json(req.body);
});

// Get a specific recipe endpoint
router.get('/:recipeId', function(req, res) {
  // TODO: Change below code with database code
  // Get new recipe
  res.json(req.params.recipeId);
});

// Update a specific recipe endpoint
router.put('/:recipeId', function(req, res) {
  // TODO: Change below code with database code
  // Update a recipe
  res.json(req.params.recipeId);
});

module.exports = router;