const jwt = require ('jsonwebtoken')

function auth(req,res,next){
    let jwtToken= req.header('Authorization')// por motivos de seguridad el token suele ir en el header
    if(!jwtToken) return res.status(401).send('Acceso Denegado. No hay token')
    jwtToken =  jwtToken.split(' ')[1] // el token se envía con la palabra clave bearer, espacio , el token
    if(!jwtToken) return res.status(401).send('Acceso Denegado. No hay token')

    try{
        const payload= jwt.verify(jwtToken,"secretKey") // nos convierte el jsonWebToken al payload
        req.user = payload //  se almacena la data en req.user
        next()
    } catch(e){
        res.status(401).send('Acceso Denegado. Token no valido')
    }

}

module.exports= auth
