require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const usersRoutes = require('./routes/usersRoutes');
const {
    errorLogger,
    errorResponder,
    invalidPathHandler,
} = require('./utils/middlewares/errorHandler');

const app = express();

app.use(helmet());

app.use(cors());
app.use(morgan('dev'));

// Routes
usersRoutes(app);

// Error handlers
app.use(errorLogger);
app.use(errorResponder);
app.use(invalidPathHandler);

module.exports = app;
