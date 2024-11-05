const { Query } = require('mongoose');
const productService = require('../services/productService');

const resolvers = {
    Query: {
        getAllProducts: () => {
            return productService.getAllProducts();
        }
    },
    Mutation: {
        createProduct: (_, {name, description, price, category, brand, qty, imgs}) => {
            let date = new Date();
            let day = date.getDate()
            let month = date.getMonth() + 1
            let year = date.getFullYear()
            let createdAt;
            if(month < 10){
                createdAt = (`${day}-0${month}-${year}`);
            }else{
                createdAt = (`${day}-${month}-${year}`);
            }

            return productService.createProduct(name, description, price, category, brand, qty, createdAt, imgs);
        },
        updateProduct: (_, {_id, description, price, qty, imgs}) => {
            return productService.updateProduct(_id, description, price, qty, imgs);
        }, 
        deleteProduct: (_, {_id}) => {
            return productService.deleteProduct(_id);
        }
    }
};

module.exports = resolvers;