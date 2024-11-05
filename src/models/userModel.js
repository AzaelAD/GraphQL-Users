const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombreCompleto: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    fechaRegistro: { type: String, require: false },
    tipoUsuario: { type: String, required: true },
    metodoPagoPreferido: { type: [String], required: false }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
