const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

// Connect to MongoDB (replace with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/kampala_clean_city', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Storage for uploaded images
const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Middleware
app.use(bodyParser.json());
app.use(express.static('uploads'));

// Routes
app.use('/api', require('./routes/reports'));
app.use('/api', require('./routes/waste'));
app.use('/api', require('./routes/forums'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});