import resultadoValidacion from "./resultadoValidacion.js"
import { param } from "express-validator"


const validacionIdServicio = [
    param('id').isMongoId().withMessage('El ID no corresponde a un mongo ID válido'),
    (req, res, next) => resultadoValidacion(req, res, next)
]

export default validacionIdServicio