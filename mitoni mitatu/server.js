const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/admission', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'admission.html'));
});

app.get('/activities', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'activities.html'));
});

app.get('/staff', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'staff.html'));
});

app.get('/update', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'update.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
