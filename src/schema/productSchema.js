const { gql } = require('apollo-server');

const typeDefs = gql`
    type Product {
        _id: ID!
        name: String!
        description: String!
        price: Float!
        category: String!
        brand: String!
        qty: Int
        createdAt: String
        imgs: [String]
    }
    
    type Query {
        getAllProducts: [Product]!
    }

    type Mutation {
        createProduct(name: String!, description: String!, price: Float!, category: String!, brand: String!, qty: Int, createdAt: String, imgs: [String]): Product!
        updateProduct(_id: ID!, description: String!, price: Float!, qty: Int, imgs: [String]): Product!
        deleteProduct(_id: ID!): Product!
    }

`;

module.exports = typeDefs;