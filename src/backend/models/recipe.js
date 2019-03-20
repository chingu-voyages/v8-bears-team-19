const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
      type: Date,
      default: Date.now
  }
});

const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;

/*{
    title,
    author,
    description,
    likes,
    author,
    shareLink: 'homemade-pizza-whatever',
    parent,
    forks: ['15asd', ''],


}*/