require('dotenv').config();

const { port } = require('./config');

const app = require('./src/app');

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`challenge meli app ready on ${port}!`));

// TODO: on.close server
