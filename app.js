const express = require('express');
const connectDb = require('./db/connect');
const routes = require('./api');
const app = express();
require('dotenv').config();

// middle wares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/vi', routes);

// express port

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    // connect mongodb
    // await connectDb(process.env.MONGO_URI);
    console.log(`mongodb is connected`);
    // connect express
    app.listen(port, () => {
      console.log(`app is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
