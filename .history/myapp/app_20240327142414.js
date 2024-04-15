const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Підключення body-parser для розбору JSON-даних
app.use(bodyParser.json());

// Мок-дані для зберігання інформації про автомобілі
let cars = [
    {
        id: 1,
        number: 'AA1234AA',
        year: 2020,
        brand: 'Toyota',
        color: 'Red',
        condition: 'New',
        ownerLastName: 'Smith',
        address: '123 Main Street'
    },
    {
        id: 2,
        number: 'BB5678BB',
        year: 2018,
        brand: 'Honda',
        color: 'Blue',
        condition: 'Used',
        ownerLastName: 'Johnson',
        address: '456 Elm Street'
    }
];

// Ендпоінт для отримання всіх автомобілів
app.get('/cars', (req, res) => {
    res.json(cars);
});

// Ендпоінт для отримання конкретного автомобіля за його id
app.get('/cars/:id', (req, res) => {
    const carId = parseInt(req.params.id);
    const car = cars.find(car => car.id === carId);
    if (!car) {
        return res.status(404).send('Car not found');
    }
    res.json(car);
});

// Ендпоінт для створення нового автомобіля
app.post('/cars', (req, res) => {
    const newCar = req.body;
    cars.push(newCar);
    res.status(201).send('Car created');
});

// Ендпоінт для оновлення інформації про автомобіль
app.put('/cars/:id', (req, res) => {
    const carId = parseInt(req.params.id);
    const updatedCar = req.body;
    const index = cars.findIndex(car => car.id === carId);
    if (index === -1) {
        return res.status(404).send('Car not found');
    }
    cars[index] = updatedCar;
    res.send('Car updated');
});

// Ендпоінт для видалення автомобіля за його id
app.delete('/cars/:id', (req, res) => {
    const carId = parseInt(req.params.id);
    const index = cars.findIndex(car => car.id === carId);
    if (index === -1) {
        return res.status(404).send('Car not found');
    }
    cars.splice(index, 1);
    res.send('Car deleted');
});

// Запускаємо сервер
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});