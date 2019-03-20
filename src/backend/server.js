const express = require('express');

const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const recipeRoutes = require('./api/routes/recipes');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('is working!')
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/recipe', recipeRoutes);
app.listen(process.env.PORT || 8080);
