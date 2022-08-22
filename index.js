const express = require("express");
const createError = require('http-errors');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');

require('dotenv').config()

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: process.env.API_ORIGIN_URL
}))

app.get("/", (req, res,) => {
    res.json(["Tony", "Shubh", "Jolly", "Gingersss", "Food"]);
});

app.use('/api', require('./routes/'));


app.use((req, res, next) => {
    next(createError.NotFound());
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message,
    });
});


app.listen(PORT, () => {
    console.log(`Server running on port :${PORT}`);
});