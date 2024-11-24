const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/userRoutes');

require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/courses', courseRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
