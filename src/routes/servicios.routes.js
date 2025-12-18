import { Router } from "express";
import { crearServicio, prueba } from "../controllers/servicios.controllers.js";


const router = Router();

//aqui diseñamso todas las rutas con los servicios
// metodos: get - post - put o patch - delete


//definir los metodos que se ejecutaran en esta ruta
router.route('/test').get(prueba)


//ALTA
router.route('/'.post(crearServicio))


export default router
