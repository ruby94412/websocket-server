const express = require('express');
require('dotenv/config');
const cors = require('cors');

const app = express();
const PORT = 8080;

const read = require('./routes/read');

app.use(cors());
app.use(express.json());
app.use(read);

app.listen(PORT, () => {
    // const host = app.address().address;
    // const port = app.address().port;
    console.log("node back end is running")
});