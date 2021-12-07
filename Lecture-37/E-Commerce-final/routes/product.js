const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const { validateProduct,isLoggedIn,isSeller,isProductAuthor } = require('../middleware');
const { showAllProducts,productForm,createProduct, showProduct, editProductForm, updateProduct, deleteProduct} = require('../controllers/product');

router.route('/')
    .get(showAllProducts)
    .post(isLoggedIn, isSeller, validateProduct, createProduct);

router.get('/new',isLoggedIn,isSeller,productForm);

router.route('/:id')
    .get(showProduct)
    .patch(isLoggedIn, isProductAuthor, validateProduct, updateProduct)
    .delete(isLoggedIn,isProductAuthor,deleteProduct);

router.get('/:id/edit',isLoggedIn,isProductAuthor, editProductForm);


module.exports = router;