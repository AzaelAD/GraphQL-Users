const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, required: true },
    category: { type: String, require: true },
    brand: { type: String, require: true },
    qty: { type: Number, default: 0 },
    createdAt: { type: String, require: false },
    imgs: { type: Array, require: false }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;