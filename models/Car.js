const mongoose = require('mongoose');

// Створення схеми для автомобіля
const carSchema = new mongoose.Schema({
  number: String,
  year: Number,
  brand: String,
  color: String,
  condition: String,
  ownerLastName: String,
  address: String
});

// Створення моделі для автомобіля на основі схеми
const Car = mongoose.model('Car', carSchema);

module.exports = Car;