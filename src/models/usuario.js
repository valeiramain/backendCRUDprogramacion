import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema(
  {
    nombre: {
      type: String,
      minLength: 3,
      maxLength: 50,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (valor) => {
          return;
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
            valor
          );
        },
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        // valor es la imagen
        validator: (valor) => {
          return /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test(
            valor
          );
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

// el nombre del modelo va en SINGULAR
const Usuario = mongoose.model("servicio", usuarioSchema);

export default Usuario;
