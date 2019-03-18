const express = require('express');
const router = express.Router();

const Recipe = require('../../models/recipe');

// Get all recipes endpoint
router.get('/', function(req, res) {
  // TODO: Change below code with database code
  // Get all recipes
  res.json('Hello from recipes route');
});

// Post a new recipe endpoint
router.post('/add', function(req, res) {
  // TODO: Change below code with database code
  // Add new recipe
  const { title, author, description } = req.body;

  // some validations..

  const newRec = new Recipe({
    title, author, description
  });

  newRec.save(err => {
    if (err) console.error(err);
  });

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
  const _id = req.params.recipeId;  
  // TODO validate id

  Recipe.findById(_id, function (err, recipe) {
    if (err) res.json({ error: RECIPE_NOT_FOUND })
  });

  res.json(req.params.recipeId);
});

// Delete a specific recipe endpoint
router.delete('/:recipeId', function(req, res) {
  // TODO: Change below code with database code
  // Delete a recipe
  res.json({message: 'recipe deleted!', _id: req.params.recipeId});
});

module.exports = router;