const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Підключення файл маршрутів для автомобілів
const carsRouter = require('./routes/cars');
app.use('/cars', carsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});