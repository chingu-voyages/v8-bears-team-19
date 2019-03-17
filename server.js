const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const recipeRoutes = require('./api/routes/recipes');
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/recipes', recipeRoutes);