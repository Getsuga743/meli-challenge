require('dotenv').config();

const express = require('express');
const helmet = require('helmet');

const app = express();

const userRoutes = require('./routes/userRoutes');

const {
    errorLogger,
    errorResponder,
    invalidPathHandler,
} = require('./utils/middlewares/errorHandler');

app.use(helmet());

// Routes
userRoutes(app);

// Error handlers
app.use(errorLogger);
app.use(errorResponder);
app.use(invalidPathHandler);

module.exports = app;
