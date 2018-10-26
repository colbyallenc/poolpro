const express = require('express');
const cors = require('cors');
const router = require('./router');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api', router);

// Internal server error response
app.use((err, req, res, next) => {  
  console.error(err.stack);
  res.status(500).send({ error: err.message });
});

module.exports = app;
