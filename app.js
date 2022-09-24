const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');





// middleware.....
app.use(cors());
app.use(express.json());







const productRoute=require('./routes/product.route')







// .........................................................................................

                                //    get/post/ data

// .........................................................................................
// get data
app.get('/', (req, res) => {
    res.send("Hello world!! my name is mozahid i am connetted")
})


// insert data
app.use('/product',productRoute)

app.use('/product',productRoute)










module.exports = app;