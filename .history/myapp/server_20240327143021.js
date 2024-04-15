const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Routes will go here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});