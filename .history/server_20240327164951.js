const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Підключення mongoose для роботи з MongoDB

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Підключення до бази даних MongoDB
mongoose.connect('mongodb://localhost:27017/carsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Підключення файл маршрутів для автомобілів
const carsRouter = require('./routes/cars');
app.use('/cars', carsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});