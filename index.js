const express = require("express");
const createError = require('http-errors');
const bodyParser = require('body-parser')
const app = express();


const PORT = process.env.PORT || 3000;

// clean up request data for usage
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/url", (req, res,) => {
    res.json(["Tony", "Lisa", "Michael", "Gingersss", "Food"]);
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


app.listen(3000, () => {
    console.log(`Server running on port :${PORT}`);
});