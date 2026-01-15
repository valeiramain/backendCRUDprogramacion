import { Router } from "express";
import { crearUsurio, listarUsurios } from "../controllers/usuarios.controllers.js";

const router = Router();

//RUTA alta: POST, listar: GET
//contruir la ruta: http://localhost:3000/api/usuarios
 
router.route("/").get(listarUsurios).post(crearUsurio);

export default router;