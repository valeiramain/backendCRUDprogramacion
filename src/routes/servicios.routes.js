import { Router } from "express";
import { crearServicio, listarServicios, obtenerServicioId, prueba } from "../controllers/servicios.controllers.js";


const router = Router();

//aqui diseñamso todas las rutas con los servicios
// metodos: get - post - put o patch - delete

//definir los metodos que se ejecutaran en esta ruta
//RUTA: test es de prueba (borrar luego de probar)
router.route('/test').get(prueba)


//RUTA alta: POST, listar: GET
//contruir la ruta: http://localhost:3000/api/servicios/
router.route('/').post(crearServicio).get(listarServicios)
// ruta GET por ID
router.route('/:id').get(obtenerServicioId)




export default router
