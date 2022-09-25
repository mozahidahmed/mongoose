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