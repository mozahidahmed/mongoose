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

// update mongoose function
exports.updateProductsService=async (productId,data)=>{
   const product=await Product.updateOne({_id:productId},{$set:data})
   return product;

}







// bulk-update mongoose function
exports.bulkUpdateProductsService=async (data)=>{
   // const product=await Product.updateMany({_id:data.ids},data.data,{
   //    runValidators:true
   // })
   // {
   //    "ids": [
   //      "6326a93c8815989867f6a9ed",
   //      "6326af4e1a07d2bc1e7bbf86"
   //    ],
   //    "data": {
   //      "price":500
   //    }
   //  }

   const products=[]
   data.ids.forEach(product=>{{
      products.push(Product.updateOne({_id:product.id},product.data));
   }})
   
  const result= Promise.all(products)
  console.log(result)
   return result;



   // {
  
   //    "ids": [
        
        
   //      {
   //     "id":"6326a93c8815989867f6a9ed",
   //      "data":{
   //        "price":100
   //      }
   //      },
        
   //      {
   //     "id":"6326af4e1a07d2bc1e7bbf86",
   //      "data":{
   //        "price":200
   //      }
   //      }
        
        
         
   //    ]


}