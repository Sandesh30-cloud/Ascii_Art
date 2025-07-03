// server.js
const express = require('express');
const figlet = require('figlet');
const app = express();
const path = require('path');

// Serve static files (like HTML) from 'public' folder
app.use(express.static('public'));

// Endpoint that returns ASCII art
app.get('/ascii', (req, res) => {
    const input = req.query.text || 'Hello';
    figlet(input, function(err, data) {
        if (err) {
            console.error('Figlet error:', err);
            res.status(500).send('Error generating ASCII art');
            return;
        }
        res.type('text/plain');
        res.send(data);
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
