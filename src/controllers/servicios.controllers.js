//contiene la logica para administrar los servicios de programacion
import Servicio from "../models/servicio.js"

// funcion de test. BORRAR LUEGO DE PROBAR
export const prueba = (req, res) => {
    console.log('consulta de prueba')
    res.send('ejemplo de respuesta desde el backend')
}


// POST: CREAR
export const crearServicio = async (req, res) => {
    try {
        //agregar validacion de datos

        // console.log(req)
        //req.body van los datos del servicio a crear, en formato json
        // console.log(req.body)

        const servicioNuevo = new Servicio(req.body)
        //save() es una query de mongoose
        await servicioNuevo.save()
        // POST se contesta con 201 (created)
        res.status(201).json({ mensaje: 'Servicio creado correctamente' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Ocurrió un error al intentar crear un servicio' })
    }
}

// GET - LISTAR todos los servicios
export const listarServicios = async (req, res) => {
    try {
        // ejecuto query find() de mongoose
        const servicios = await Servicio.find()
        // responde mandando el array de servicios
        res.status(200).json(servicios)
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Ocurrió un error al intentar listar los servicio' })
    }
}

// GET POR ID
export const obtenerServicioId = async (req, res) => {
    try {
        console.log(req.params.id)
        const servicioBuscado = await Servicio.findById(req.params.id)
        if (!servicioBuscado) {
            return res.status(404).json({ mensaje: 'No se encontró un servicio con el ID enviado' })
        }
        res.status(200).json(servicioBuscado)

    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Ocurrió un error al intentar buscar el servicio por ID' })
    }

}