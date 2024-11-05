const Product = require('../models/productModel');

module.exports = {
    getAllProducts: async () => {
        return await Product.find();
    },
    createProduct: async (name, description, price, category, brand, qty, createdAt, imgs) => {
        const product = new Product({name, description, price, category, brand, qty, createdAt, imgs});
        return await product.save();
    },
    updateProduct: async (_id, description, price, qty, imgs) => {
        return await Product.findByIdAndUpdate(_id, { description, price, qty, imgs });
    },
    deleteProduct: async (_id) => {
        return await Product.findByIdAndDelete(_id);
    }
}