const express = require('express');
const app = express();
const carsRouter = require('./routes/cars');

// Встановлюємо шлях для маршруту "cars"
app.use('/cars', carsRouter);

// Створюємо маршрут для кореневої URL
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});







const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Routes will go here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// GET all cars
app.get('/cars', (req, res) => {
    // Logic to retrieve all cars from session data
    res.send('Get all cars');
});

// GET a specific car by ID
app.get('/cars/:id', (req, res) => {
    // Logic to retrieve a car by ID from session data
    res.send('Get car by ID');
});

// POST a new car
app.post('/cars', (req, res) => {
    // Logic to create a new car and add it to session data
    res.send('Create a new car');
});

// PUT/UPDATE an existing car by ID
app.put('/cars/:id', (req, res) => {
    // Logic to update an existing car by ID in session data
    res.send('Update car by ID');
});

// DELETE a car by ID
app.delete('/cars/:id', (req, res) => {
    // Logic to delete a car by ID from session data
    res.send('Delete car by ID');
});