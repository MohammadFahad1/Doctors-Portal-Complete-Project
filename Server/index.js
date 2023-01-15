const express = require('express');
const app = express();

// Middlewares
app.use(express.json())

const PORT = 5000 || process.env.PORT;

// Get Routes
app.get('/', (req, res) => {
    res.send("Welcome to the Engineer's Portal!")
})

app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
})