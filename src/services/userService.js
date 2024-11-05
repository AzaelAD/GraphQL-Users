const User = require('../models/userModel');

module.exports = {
    getAllUsers: async () => {
        return await User.find();
    },
    createUser: async (nombreCompleto, email, password, direccion, telefono, fechaRegistro, tipoUsuario, metodoPagoPreferido) => {
        const user = new User({ nombreCompleto, email, password, direccion, telefono, fechaRegistro, tipoUsuario, metodoPagoPreferido });
        return await user.save();
    },
    updateUser: async (_id, nombreCompleto, direccion, telefono, tipoUsuario, metodoPagoPreferido) => {
        return await User.findByIdAndUpdate(_id, { nombreCompleto, direccion, telefono, tipoUsuario, metodoPagoPreferido });
    },
    deleteUser: async (_id) => {
        return await User.findByIdAndDelete(_id);
    }
};
