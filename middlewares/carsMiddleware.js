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


const Joi = require('joi');

function validateCarData(req, res, next) {
  const schema = Joi.object({
    number: Joi.string().required(),
    year: Joi.number().integer().min(1900).max(2030).required(),
    brand: Joi.string().required(),
    color: Joi.string().required(),
    condition: Joi.string().required(),
    ownerLastName: Joi.string().required(),
    address: Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
}

module.exports = validateCarData;