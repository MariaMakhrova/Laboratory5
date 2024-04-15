const express = require('express');
const router = express.Router();

// GET all cars
router.get('/', (req, res) => {
    // Logic to retrieve all cars from session data
    res.send('Get all cars');
});

// GET a specific car by ID
router.get('/:id', (req, res) => {
    // Logic to retrieve a car by ID from session data
    res.send('Get car by ID');
});

// POST a new car
router.post('/', (req, res) => {
    // Logic to create a new car and add it to session data
    res.send('Create a new car');
});

// PUT/UPDATE an existing car by ID
router.put('/:id', (req, res) => {
    // Logic to update an existing car by ID in session data
    res.send('Update car by ID');
});

// DELETE a car by ID
router.delete('/:id', (req, res) => {
    // Logic to delete a car by ID from session data
    res.send('Delete car by ID');
});

module.exports = router;
