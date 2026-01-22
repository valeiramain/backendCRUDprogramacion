import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
import Usuario from "../models/usuario.js";

const validacionUsuario = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre de usuario es un dato obligatorio")
    .isLength({
      min: 3,
      max: 50,
    })
    .withMessage("El nombre de usuario debe tener entre 3 y 50 caracteres")
    .isString()
    .withMessage("El nombre de usuario debe ser un texto"),

  body("email")
    .notEmpty()
    .withMessage("El email es un dato obligatorio")
    .isEmail()
    .withMessage(
      "El email debe tener un formato válido. Ej: email@dominio.extensión",
    )
    .matches(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    )
    .withMessage(
      "El email debe cumplir con el siguiente formato: email@dominio.extensión",
    )
    .custom(async (valor, { req }) => {
      // verificar que el email no este duplicado
      const usuarioExistente = await Usuario.findOne({ email: valor });
      // Si el usuario existe Y no es el mismo que estamos editando
      if (
        usuarioExistente &&
        usuarioExistente._id.toString() !== req.params.id
      ) {
        throw new Error("El email ya está en uso por otro usuario");
      }
    }),

  body("password")
    .notEmpty()
    .withMessage("La contraseña es un dato obligatorio")
    .isLength({
      minLength: 8,
      maxLength: 16,
    })
    .withMessage(
      "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter especial.",
    )
    
    .withMessage(
      "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo",
    )
    .matches(
      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
    ),

  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionUsuario;
