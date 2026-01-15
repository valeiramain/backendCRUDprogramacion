import { param } from "express-validator"
import resultadoValidacion from "./resultadoValidacion.js"

const validacionIdServicio = [
    //el param es igual que puse en la ruta
    param('id').isMongoId().withMessage('El ID enviado no corresponde a un mongo ID válido'),
    (req, res, next) => resultadoValidacion(req, res, next)
]

export default validacionIdServicio;