const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://root:toor@localhost:27017/devradar?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json()); // Enable usage of JSON on request body (POST, PUT)
app.use(routes);

app.listen(3333);