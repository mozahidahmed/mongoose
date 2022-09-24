const Product=require('../models/Product')

exports.getProducts=async(req, res, next) => {
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
}


exports.createProduct=async(req, res, next) => {
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
    
 

   
}