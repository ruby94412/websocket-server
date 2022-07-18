const express = require('express');
// require('dotenv/config');

const cors = require('cors');

const app = express();

const PORT = 8080;

const read = require('./routes/read');
const startWebSocketServer = require('./websockets/index');
app.use(cors());
app.use(express.json());
app.use(read);

const server = app.listen(PORT, () => {
    console.log("node back end is running")
});

startWebSocketServer(server);

