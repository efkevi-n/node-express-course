require('dotenv').config();
const express = require('express');
const ConnectMongo = require('./db/connect');
const tasks = require('./routes/tasks');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/home', (req, res) => {
    res.send('Task Manager App');
});
app.use('/api/v1/tasks', tasks);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await ConnectMongo(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

start();
