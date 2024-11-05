const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        _id: ID!
        nombreCompleto: String!
        email: String!
        password: String!
        direccion: String!
        telefono: String!
        fechaRegistro: String
        tipoUsuario: String!
        metodoPagoPreferido: [String]
    }
    
    type Query {
        getAllUsers: [User]!
    }

    type Mutation {
        createUser(nombreCompleto: String!, email: String!, password: String!, direccion: String!, telefono: String!, tipoUsuario: String!, metodoPagoPreferido: [String]): User!
        updateUser(_id: ID!, nombreCompleto: String, direccion: String, telefono: String, tipoUsuario: String, metodoPagoPreferido: [String]): User!
        deleteUser(_id: ID!): User!
    }
`;

module.exports = typeDefs;
