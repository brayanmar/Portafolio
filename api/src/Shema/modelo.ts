const mongo = require('mongoose');
const Schema = mongo.Schema;

const Portafolio =  new Schema({
    name: {
    type: String,
    required: true,
    },
    correo: {
        type: String,
        unique: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, "invalid mail"],
    },
    descripcion: {
        type: String,
        min: 15,
    }

})

module.exports = mongo.model("User", Portafolio )