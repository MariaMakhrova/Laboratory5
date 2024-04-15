const express = require('express');
const router = express.Router();

// GET запит для отримання всіх автомобілів
router.get('/', (req, res) => {
  // Отримання всіх автомобілів (псевдокод)
  const cars = getAllCars();

  // Повернення списку автомобілів у відповідь
  res.json(cars);
});

// Додайте інші маршрути за потребою

module.exports = router;