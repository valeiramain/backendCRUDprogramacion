#  Backend - CRUD de Servicios de Programación

Un servicio backend robusto para gestionar servicios de programación, construido con tecnologías modernas y escalables.
#  Tecnologías Utilizadas

- Node.js - Entorno de ejecución de JavaScript

- Express - Framework web minimalista

- MongoDB - Base de datos NoSQL

- Mongoose - ODM para MongoDB

#  Middlewares Implementados

- Morgan - Logging de peticiones HTTP

- CORS - Permite peticiones desde otros dominios

- Express.json() - Parseo de JSON en el body

- Manejo de errores - Middleware para errores personalizados

#  Prerrequisitos

- Node.js (v14 o superior)

- MongoDB (local o Atlas)

- npm o yarn

# Instalación

usa la estructura del archivo .env.example y reemplazalo con tus valores



# 🚀 Endpoints de la API

## Servicios

URL: /api/servicios

### Listar Servicios
Listar todos los servicios del proyecto

- URL:  http://localhost:3000/api/servicios
- method: GET


Respuestas:

  - 200: ok
  - 500: Error interno del servidor


### Crear Servicio
Podemos crear un servicio enviando una solicitud del siguiente tipo:


- URL:  http://localhost:3000/api/servicios
- method: POST
- heathers: Content-Type: application/json
- body: 
 ```json
{
        "servicio": "Matenimiento de sitio web",
        "precio": 50,
        "imagen": "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg",
        "categoria": "Desarrollo Web",
        "descripcion_breve": "Web profesional *responsive* con secciones clave: Inicio, Servicios, Quiénes Somos, Contacto y Blog (sin funcionalidad de publicación).",
        "descripcion_amplia": "Desarrollo de un sitio web corporativo **moderno y optimizado para SEO**. Incluye diseño personalizado basado en plantillas, integración de formulario de contacto, galería de imágenes, y hasta 7 páginas principales. Ideal para empresas que necesitan una fuerte presencia digital."
    }
 ```


Respuestas:

  - 200: OK
  - 400: Bad Request
  - 500: Error interno del servidor
  


### Editar Servicio
Podemos editar todos los datos de un servicio enviando una solicitud del siguiente tipo:


- URL:  ```http://localhost:3000/api/servicios/{servicio_id}```
- method: PUT
- heathers: Content-Type: application/json
- body: 
 ```json
{
        "servicio": "Matenimiento de sitio web",
        "precio": 50,
        "imagen": "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg",
        "categoria": "Desarrollo Web",
        "descripcion_breve": "Web profesional *responsive* con secciones clave: Inicio, Servicios, Quiénes Somos, Contacto y Blog (sin funcionalidad de publicación).",
        "descripcion_amplia": "Desarrollo de un sitio web corporativo **moderno y optimizado para SEO**. Incluye diseño personalizado basado en plantillas, integración de formulario de contacto, galería de imágenes, y hasta 7 páginas principales. Ideal para empresas que necesitan una fuerte presencia digital."
    }
 ```


Respuestas:

  - 201: Creado
  - 400: Bad Request
  - 404: Servicio no encontrado
  - 500: Error interno del servidor
  


### Borrar Servicio
Podemos borrar un servicio enviando un ID

- URL:  ```http://localhost:3000/api/servicios/{servicio_id}```
- method: DELETE

Respuestas:

  - 200: OK
  - 400: Bad Request
  - 404: Servicio no encontrado
  - 500: Error interno del servidor
  


## Usuarios
proximamente

## 🙍‍♀️Autor

Valentina Iramain