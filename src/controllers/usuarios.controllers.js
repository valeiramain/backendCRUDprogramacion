import  Usuario  from "../models/usuario.js";
import bcrypt from "bcrypt";  

export const crearUsurio = async (req, res) => {
  try {
    // agregar validacion antes de crear usuario

    //hashear la contraseña
    const saltos = bcrypt.genSaltSync(10);
    console.log(saltos)
    const passwordHasheado = bcrypt.hashSync(req.body.password, saltos);
    req.body.password = passwordHasheado;

    const usuarioNuevo = new Usuario(req.body);
    await usuarioNuevo.save();
    res.status(201).send("Usuario creado correctamente");

  } catch (error) {
    console.error(error);
    res.status(500).send("Ocurrió un error al intentar crear usuario");
  }
};

export const listarUsurios = (req, res) => {
  res.send("listar usuario");
};
