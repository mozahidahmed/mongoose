const Product=require('../models/Product')


// ger mongoose function
exports.getProductsService=async ()=>{
   const products= await Product.find({}); 
   return products;

}


// post mongoose function
exports.createProductsService=async (data)=>{
   const product=  await Product.create(data); 
   return product;

}

// post mongoose function
exports.updateProductsService=async (productId,data)=>{
   const product=await Product.updateOne({_id:productId},{$set:data})
   return product;

}