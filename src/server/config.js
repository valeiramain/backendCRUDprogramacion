// framework para crear el backend
import express from "express"
// importar middlewares
import cors from 'cors'
import morgan from 'morgan'

// se crea un objeto que represente al SERVIDOR. el back-end Siempre tiene que estar ejecutándose
export default class Server{
    constructor(){
        // app se usa para hacer referencia a express
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middlewares()
    }

    // metodos
    middlewares(){
        // incializamos los middlewares que necesitamos

        this.app.use(cors()); // permite escuchar conexiones remotas
        this.app.use(express.json()); // permite interpretar los datos JSON que llegan en una solicitud
        this.app.use(morgan('dev')); // ofrece datos extras en la terminal del backend
    }

    // para que arranque el backend
    listen(){
        this.app.listen(this.port,()=>console.info(`El servidor se está ejecutando en el puerto: ${this.port}`))
    }
}