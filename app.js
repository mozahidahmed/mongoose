const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');




// middleware.....
app.use(cors());
app.use(express.json());

// Schema............................................
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'please write product'],
        trim:true,
        unique:[true,'name must be uniq'],
        minLength:[3, "name must be 3 character"],
        maxLength:[100, "Name is too large "]
    },
    description:{
      type:String,
      required:true, 
    },

    price:{
      type:Number,
      required:true, 
      min:[0, "price can be negative"],
    },

    unit:{
      type:String,
      required:true,
      enum :{
        values:["kg", "litre","pcs"],
        massage:"user can not be {VALUE}, must be kg/litre/pcs"
      }
    },

    Quantity:{
        type:Number,
        required:true, 
        min:[0, "quantity can be negative"],
        validate:{
            validator:(value)=>{
             const isInteger=Number.isInteger(value);
             if(isInteger){
              return true;
             }
             else{
               return false;
             }
            }
        },
        message :"quantity must be a an integer"
      },


      status:{
        type:String,
        enum :{
            values:["is stock", "out-stock", "discontinued"],
            massage:"status can be {VALUE}"
          }
      },



      supplier:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Supplier"
      },

      catagories:[
        {
            name:String,
            required:true,
        },
        {
            _id:mongoose.Schema.Types.ObjectId, 
        }

      ]



//   createdAt:{
//     type:Date,
//     default:date.now,
//   } ,

//   updateAt:{
//     type:Date,
//     default:date.now,
//   }    
},{timestamps:true})
// Schema.............................................................





app.get('/', (req,res) => {
    res.send("Hello world!! my name is mozahid i am connetted")
})


module.exports=app;