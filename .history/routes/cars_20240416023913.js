const express = require('express');
const router = express.Router();
const Car = require('../models/Car'); // Підключення моделі автомобіля
const validateCarData = require('../middleware/validateCarData');

// POST a new car
router.post('/', validateCarData, async (req, res) => {
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

// PUT/UPDATE an existing car by ID
router.put('/:id', validateCarData, async (req, res) => {
  try {
    // Отримання автомобіля за його ID
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    // Оновлення даних про автомобіль
    car.set(req.body);
    const updatedCar = await car.save();
    res.json(updatedCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;