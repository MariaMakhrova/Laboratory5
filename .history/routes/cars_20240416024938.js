const express = require('express');
const router = express.Router();
const passport = require('passport'); // Пакет Passport.js для аутентифікації
const Car = require('../models/Car'); // Підключення моделі автомобіля
const validateCarData = require('../middleware/validateCarData');
const { checkCarExists, validateCarUpdate } = require('../middleware/carMiddleware');

// POST a new car (додайте middleware аутентифікації та авторизації перед обробкою запиту)
router.post('/', passport.authenticate('jwt', { session: false }), validateCarData, async (req, res) => {
  // Отримання даних про автомобіль з тіла запиту
  const { number, year, brand, color, condition, ownerLastName, address } = req.body;

  // Створення нового об'єкту автомобіля
  const car = new Car({
    number,
    year,
    brand,
    color,
    condition,
    ownerLastName,
    address
  });

  try {
    // Збереження нового автомобіля у базі даних
    const newCar = await car.save();
    res.status(201).json(newCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT/UPDATE an existing car by ID (додайте middleware аутентифікації та авторизації перед обробкою запиту)
router.put('/:id', passport.authenticate('jwt', { session: false }), validateCarUpdate, checkCarExists, async (req, res) => {
  try {
    // Отримання автомобіля за його ID
    const car = req.car; // з middleware

    // Оновлення даних про автомобіль
    car.set(req.body);
    const updatedCar = await car.save();
    res.json(updatedCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
