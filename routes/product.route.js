const express=require('express')
const router=express.Router()
const productController=require('../controllers/product.controller')


// GET
router.route('/')
.get(productController.getProducts)
.post(productController.createProduct)


// SIMPLE.................................
router.route('/bulk-update')
.patch(productController.bulkUpdateProduct)


// ID...................................
router.route('/:id')
.patch(productController.updateProduct)
.delete(productController.deleteProduct)










module.exports=router