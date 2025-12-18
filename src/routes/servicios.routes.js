import { Router } from "express";

const router = Router();

//aqui diseñamso todas las rutas con los servicios
// metodos: get - post - put o patch - delete


//definir los metodos que se ejecutaran en esta ruta
router.route('/test').get((req,res)=>{
    console.log('consulta de prueba')
    res.send('ejemplo de respuesta desde el backend')
})

export default router
