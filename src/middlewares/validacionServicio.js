import { body } from "express-validator"
import resultadoValidacion from "./resultadoValidacion.js"
import Servicio from "../models/servicio.js"


const validacionServicio = [
    body('servicio')
        .notEmpty()
        .withMessage('El servicio es un dato obligatorio')
        .isLength({
            min: 5,
            max: 100,
        })
        .withMessage('El servicio debe tener entre 5 y 100 caracteres')
        .isString()
        .withMessage('El servicio debe ser un texto')
        .custom(async (valor, { req }) => {
            // verificar que el nombre del servicio no este duplicado
            const servicioExistente = await Servicio.findOne({ servicio: valor });
            if (!servicioExistente) {
                return true
            }
            // en el "req" hay un parametro? y tiene el mismo ID que el servicio existente
            //? para que si no existe ID no de undefined 
            //pregunta para validar si estoy editando el mismo servicio
            if (req.params?.id && servicioExistente._id.toString() === req.params.id) {
                // confirma que puede cambiar el servicio porque coinciden los IDs
                return true
            }
            throw new Error('El servicio ya existe en la base de datos')
        }),
    body('precio')
        .notEmpty()
        .withMessage('El precio es un dato obligatorio')
        .isNumeric()
        .withMessage('El precio debe ser un número')
        .isFloat({
            min: 50,
            max: 1000000,
        })
        .withMessage('El precio de estar entre $50 y $1000000'),
    body('imagen')
        .notEmpty()
        .withMessage('La imagen es un dato obligatorio')
        .isString()
        .withMessage('La imagen debe ser una cadena de texto')
        .matches(/^https:\/\/.+\.(jpg|jpeg|png|gif|webp|bmp|svg)$/)
        .withMessage('La imagen debe ser una url de imagen valida terminada en (jpg|jpeg|png|webp)'),
    body('categoria')
        .notEmpty()
        .withMessage('La categoría es un dato obligatorio')
        .isString()
        .withMessage('La categoría debe ser una cadena de texto')
        .isIn(["Desarrollo Web", "Desarrollo Mobile", "Backend y API", "Otros"])
        .withMessage('La categoría debe ser uno de los siguientes valores:'),
    body('descripcion_breve')
        .notEmpty()
        .withMessage('El descripcion breve es un dato obligatorio')
        .isLength({
            min: 5,
            max: 250,
        })
        .withMessage('El descripcion breve debe tener entre 5 y 250 caracteres')
        .isString()
        .withMessage('El descripcion breve debe ser un texto'),
    body('descripcion_amplia')
        .notEmpty()
        .withMessage('El descripcion amplia es un dato obligatorio')
        .isLength({
            min: 10,
            max: 500,
        })
        .withMessage('El descripcion amplia debe tener entre 10 y 500 caracteres')
        .isString()
        .withMessage('El descripcion amplia debe ser un texto'),
    (req, res, next) => resultadoValidacion(req, res, next)
]

export default validacionServicio