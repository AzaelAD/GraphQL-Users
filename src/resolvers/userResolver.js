const { Query } = require('mongoose');
const userService = require('../services/userService');

const resolvers = {
    Query: {
        getAllUsers: () => {
            return userService.getAllUsers();
        }
    },
    Mutation: {
        createUser: (_, { nombreCompleto, email, password, direccion, telefono, tipoUsuario, metodoPagoPreferido }) => {
            let date = new Date();
            let day = date.getDate()
            let month = date.getMonth() + 1
            let year = date.getFullYear()
            let fechaRegistro;
            if(month < 10){
                fechaRegistro = (`${day}-0${month}-${year}`);
            }else{
                fechaRegistro = (`${day}-${month}-${year}`);
            }
            return userService.createUser(nombreCompleto, email, password, direccion, telefono, fechaRegistro, tipoUsuario, metodoPagoPreferido);
        },
        updateUser: (_, { _id, nombreCompleto, direccion, telefono, tipoUsuario, metodoPagoPreferido }) => {
            return userService.updateUser(_id, nombreCompleto, direccion, telefono, tipoUsuario, metodoPagoPreferido);
        },
        deleteUser: (_, { _id }) => {
            return userService.deleteUser(_id);
        }
    }
};

module.exports = resolvers;
