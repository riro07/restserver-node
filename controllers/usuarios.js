const { response, request } = require('express');

const usuariosGet = ( req = request, res = response) => {

    const { q, nombre = 'no name', apikey } = req.query;

    res.json({
        msg: 'get api - controlador',
        q,
        nombre,
        apikey
    })

}

const usuariosPut = (req, res = response) => {

    const { id } = req.params

    res.json({
        msg: 'put api',
        id
    })
}


const usuariosPost = ( req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post api - controlador',
        nombre,
        edad
    })

}

const usuariosDelete = ( req, res = response) => {

    res.json({
        msg: 'delete api - controlador'
    })

}

const usuariosPatch = ( req, res = response) => {

    res.json({
        msg: 'patch api - controlador'
    })

}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}