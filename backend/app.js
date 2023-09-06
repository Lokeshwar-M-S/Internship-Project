const express = require("express");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require('cors');


//Database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>console.log("Connected to DB"))
    .catch((err) => console.log(err));

//port
const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`Server running successfully on ${port}`);
});