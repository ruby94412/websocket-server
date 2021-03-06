const express = require('express');
// require('dotenv/config');

const cors = require('cors');

const app = express();

const PORT = 8080;

const routes = require('./routes');
const startWebSocketServer = require('./websockets/index');
app.use(cors());
app.use(express.json());
app.use(routes);

// local test address to be changed when deployed
const server = app.listen(PORT, '192.168.0.37');

startWebSocketServer(server);

