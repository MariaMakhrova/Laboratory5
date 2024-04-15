const express = require('express');
const router = express.Router();
const Car = require('../models/Car'); // Підключення моделі автомобіля

// GET all cars
router.get('/all', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific car by ID
router.get('/:id', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new car
router.post('/', async (req, res) => {
  const car = new Car({
    number: req.body.number,
    year: req.body.year,
    brand: req.body.brand,
    color: req.body.color,
    condition: req.body.condition,
    ownerLastName: req.body.ownerLastName,
    address: req.body.address
  });

  try {
    const newCar = await car.save();
    res.status(201).json(newCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT/UPDATE an existing car by ID
router.put('/:id', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    car.set(req.body);
    const updatedCar = await car.save();
    res.json(updatedCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// DELETE a car by ID
router.delete('/:id', async (req, res) => {
    try {
      const car = await Car.findById(req.params.id);
      if (!car) {
          return res.status(404).json({ error: 'Car not found' });
      }
      
      // Логіка видалення автомобіля
      await car.remove();
      
      res.status(200).json({ message: 'Car deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });