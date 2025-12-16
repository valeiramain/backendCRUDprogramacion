import Server from './src/server/config.js'

// instanciar la clase server
const server = new Server();

//escuche el puerto. invocar al metodo listen
server.listen();