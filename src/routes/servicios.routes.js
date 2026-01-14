import { Router } from "express";
import { crearServicio, editarServicio, listarServicios,borrarServicio, obtenerServicioId, prueba } from "../controllers/servicios.controllers.js";
import validacionServicio from "../middlewares/validacionServicio.js";


const router = Router();

//aqui diseñamos todas las rutas con los servicios
// metodos: get - post - put o patch - delete

//definir los metodos que se ejecutaran en esta ruta
//RUTA: test es de prueba (borrar luego de probar)
router.route('/test').get(prueba)


//RUTA alta: POST, listar: GET
//contruir la ruta: http://localhost:3000/api/servicios/
// 1° ejecuta validacionServicio, y si esta ok ejecuta crearServicio
router.route('/').post([validacionServicio],crearServicio).get(listarServicios)

// ruta GET por ID
router.route('/:id').get(obtenerServicioId).put([validacionServicio],editarServicio).delete(borrarServicio)

export default router
