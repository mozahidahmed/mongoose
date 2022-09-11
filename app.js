const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');




// middleware.....
app.use(cors());
app.use(express.json());






app.get('/', (req,res) => {
    res.send("Hello world!! my name is mozahid i am connetted")
})


module.exports=app;