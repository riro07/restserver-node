const express = require('express')
const cors = require('cors');
const router = require('../routes/usuarios');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares: usan el 'use'
        this.middlewares();

        // Rutas de mi aplicación           
        this.routes();
    }

    middlewares(){
        
        // CORS
        this.app.use( cors() )

        // Lectura y parseo del body( habilita la captura de info del body )
        this.app.use( express.json() )

        //Directorio Publico
        this.app.use( express.static('public') );

    }

    routes(){
        // endpoint api

        // En este middleware se configuro la ruta
        this.app.use( this.usuariosPath, require('../routes/usuarios'));

    }

    listen(){
        
        this.app.listen( this.port, () => {
            console.log('Server on port', this.port)  
        })
    }

}

module.exports = Server;