import mongoose, { Schema } from "mongoose";

const servicioSchema = new Schema({
    servicio: {
        type: String,
        minLength: 5,
        maxLength: 100,
        required: true,
        unique: true
    },
    precio: {
        type: Number,
        reuired: true,
        min: 50,
        max: 1000000
    },
    imagen: {
        type: String,
        required: true,
        validate: {
            // valor es la imagen
            validator: (valor) => { return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/.test(valor) }
        }
    },
    categoria: {
        type: String,
        required: true,
        enum: ["Desarrollo Web", "Desarrollo Mobile", "Backend y API", "Otros"],
    },
    descripcion_breve: {
        type: String,
        rquired: true,
        minLength: 5,
        maxLength: 250,
    },
    descripcion_amplia: {
        type: String,
        rquired: true,
        minLength: 10,
        maxLength: 500,
    }
},
    {
        timestamps: true
    }
);

// el nombre del modelo va en SINGULAR
const Servicio = mongoose.model('servicio',servicioSchema)

export default Servicio;