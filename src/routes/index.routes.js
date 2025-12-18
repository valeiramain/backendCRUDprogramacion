// diseñar las rutas con express
import { Router } from "express";
import serviciosRoutes from "./servicios.routes.js";

//invocar las herramientas que nos provee router, y las guarda en el objeto router
const router = Router()

//directorio de todas las rutas
//contruir la ruta: http://localhost:3000/api/servicios/test
router.use('/servicios',serviciosRoutes)

export default router;