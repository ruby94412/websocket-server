const express = require('express');
const websocket = require('express-ws');
// require('dotenv/config');

const cors = require('cors');

const app = express();
websocket(app);

const PORT = 8080;

const read = require('./routes/read');

app.use(cors());
app.use(express.json());
app.use(read);

app.listen(PORT, () => {
    console.log("node back end is running")
});