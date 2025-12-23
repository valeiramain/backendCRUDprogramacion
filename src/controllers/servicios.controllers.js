//contiene la logica para administrar los servicios de programacion
import Servicio from "../models/servicio.js"

// funcion de test. BORRAR LUEGO DE PROBAR
export const prueba = (req,res)=>{
    console.log('consulta de prueba')
    res.send('ejemplo de respuesta desde el backend')
}


// CREAR servicio - POST
export const crearServicio = async (req,res)=>{
    try{
        //agregar validacion de datos
        
        console.log(req)
        //req.body van los datos del servicio a crear, en formato json
        console.log(req.body)

        const servicioNuevo = new Servicio(req.body)
        //save() es una query de mongoose
        await servicioNuevo.save()
        // POST se contesta con 201 (created)
        res.status(201).json({mensaje:'Servicio creado correctamente'})
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje:'Ocurrió un error al intentar crear un servicio'})
    }
}