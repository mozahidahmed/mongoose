const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');




// middleware.....
app.use(cors());
app.use(express.json());

// Schema............................................
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please write product'],
        trim: true,
        unique: [true, 'name must be uniq'],
        minLength: [3, "name must be 3 character"],
        maxLength: [100, "Name is too large "]
    },
    description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
        min: [0, "price can be negative"],
    },

    unit: {
        type: String,
        required: true,
        enum: {
            values: ["kg", "litre", "pcs"],
            message: 'user can not be {VALUE}, must be kg/litre/pcs'
        }
    },

    quantity: {
        type: Number,
        required: true,
        min: [0, "quantity can be negative"],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if (isInteger) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        message: "quantity must be a an integer"
    },


    status: {
        type: String,
        enum: {
            values: ["in-stock", "out-stock", "discontinued"],
            message: 'status can be {VALUE}'
        }
    },



    //   supplier:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Supplier"
    //   },



    //   categories:[{
    //     name:{
    //         type:String,
    //         required:true,
    //     },
    //     _id:mongoose.Schema.Types.ObjectId,

    //   }
    //  ]



    //   createdAt:{
    //     type:Date,
    //     default:date.now,
    //   } ,

    //   updateAt:{
    //     type:Date,
    //     default:date.now,
    //   }    
}, { timestamps: true })
// Schema.............................................................





// middle ware mongoose for saving data pre/post
productSchema.pre('save',function(next){
    console.log("i am pre middle ware ")
    if(this.quantity === 0){
        this.status='out-stock'
    }
    next()
})

productSchema.post('save',function(doc,next){
    console.log("i am save middle ware ")
    next()
})



// instance Method
productSchema.methods.logger=function(){
    console.log(`Data save for ${this.name}`)
}







// SCHEMA > MODAL > QUERY
const Product = mongoose.model('products', productSchema)














// .........................................................................................

                                //    get/post/ data

// .........................................................................................
// get data
app.get('/', (req, res) => {
    res.send("Hello world!! my name is mozahid i am connetted")
})


// insert data
app.post('/product', async(req, res, next) => {
    try{
        const result = await Product.create(req.body); 
        result.logger()
    // const product = new Product(req.body);
    // const result=await product.save()
    res.status(200).json({
        status: 'success',
        message:'Data inserted success',
        data:result,
    })
    }catch(error){
        res.status(404).json({
            status: 'fail',
            message:'Data inserted success fail',
            error:error.message
        })

    }
    
 

   
})


app.get('/product', async(req, res, next) => {
    try{
        const result = await Product.find({}); 
        res.status(200).json({
        status: 'success',
        message:'Data get success',
        data:result,
    })
    }catch(error){
        res.status(404).json({
            status: 'fail get data',
            message:'Data get success fail',
            error:error.message
        })
    }  
})







module.exports = app;