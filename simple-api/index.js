const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// CORS Middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

// Add this block before your existing routes
app.get('/', (req, res) => {
    res.send('Welcome to the root of the API!');
});

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
