const { getProductsService, 
    createProductsService ,
    updateProductsService,
    deleteProductsService,
    bulkUpdateProductsService} = require("../services/product.services")

// get controller
exports.getProducts=async(req, res, next) => {
    try{
        const result = await getProductsService()
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


// post controller
exports.createProduct=async(req, res, next) => {
    try{
        const result = await createProductsService(req.body); 
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



// update product 
exports.updateProduct=async(req, res, next) => {
    try{
  
      const {id}=req.params;
      const result= await updateProductsService(id,req.body);

    res.status(200).json({
        status: 'success',
        message:'Data update success',
        data:result,
    })
    }catch(error){
        res.status(404).json({
            status: 'fail',
            message:'Data update success fail',
            error:error.message
        })
    }   
}





// bulk-update multiple-update
exports.bulkUpdateProduct=async(req, res, next) => {
    try{
      const result= await bulkUpdateProductsService(req.body);

    res.status(200).json({
        status: 'success',
        message:'Data update success',
        data:result,
    })
    }catch(error){
        res.status(404).json({
            status: 'fail',
            message:'Data update success fail',
            error:error.message
        })
    }   
}



exports.deleteProduct=async(req, res, next) => {
    try{
        

        const {id}=req.params;
        const result = await deleteProductsService(id); 
     
    // const product = new Product(req.body);
    // const result=await product.save()
    res.status(200).json({
        status: 'success',
        message:'Data delete success',
        data:result,
    })
    }catch(error){
        res.status(404).json({
            status: 'fail',
            message:'Data delete success fail',
            error:error.message
        })
    }   
}



