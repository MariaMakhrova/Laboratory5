const Car = require('../models/Car');

async function checkCarExists(req, res, next) {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    req.car = car; // Додаємо об'єкт автомобіля до об'єкту запиту для подальшого використання
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { checkCarExists };