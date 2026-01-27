import Usuario from "../models/usuario.js";
import bcrypt from "bcrypt";
import  generarJWT  from "../helpers/generarJWT.js";

export const crearUsurio = async (req, res) => {
  try {
    // agregar validacion antes de crear usuario

    //hashear la contraseña
    const saltos = bcrypt.genSaltSync(10);
    console.log(saltos);
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

export const listarUsurios = async (req, res) => {
  try {
    const listaUsuarios = await Usuario.find();
    if (listaUsuarios.length === 0) {
      return res.status(404).json({ mensaje: "No hay usuarios registrados" });
    }
    res.status(200).json(listaUsuarios);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al intentar listar los usuarios" });
  }
};

export const login = async (req, res) => {
  try {
    // toma email y password del body req.body.email, req.body.password (esta desestructurado)
    const { email, password } = req.body;
    //verificar si el email existe en la base de datos
    const usuarioBuscado = await Usuario.findOne({ email }); // await Usuario.findOne({ email: req.body.email });

    if (!usuarioBuscado) {
      res.status(401).json({ mensaje: "Credenciales Incorrectas" });
    }

    // verificar la contraseña que envía el usuario con la que está en la base de datos (true o false)
    const passwordValido = bcrypt.compareSync(
      password,
      usuarioBuscado.password,
    );

    if (!passwordValido) {
      // el codigo de error 401 es de no autorizado
      return res.status(401).json({ mensaje: "Credenciales Incorrectas" });
    }

    // Si todo correcto, informar al front que debe loguear al usuario. Se envia id del usuario par generar el token
    const token = generarJWT(usuarioBuscado._id);
    res
      .status(200)
      .json({
        mensaje: "Login exitoso",
        nombre: usuarioBuscado.nombre,
        token: token,
      });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al intentar iniciar sesión" });
  }
};
