import jwt from "jsonwebtoken";

//en los parametros está la información que queremos guardar en el token
//NO se debe guardar información sensible en el token
const generarJWT = (id) => {
  try {
    const payload = { id };
    const token = jwt.sign(payload, process.env.SECRETJWT, { expiresIn: "2h" });
    return token;
  } catch (error) {
    console.error(error);
    throw new Error("Error al generar el token");
  }
};

export default generarJWT;
