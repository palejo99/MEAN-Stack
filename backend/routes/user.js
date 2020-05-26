const express= require ('express')
const router = express.Router()
const {User} = require ('../models/user')

router.post('/',async(req,res)=>{
    let user = await User.findOne({email: req.body.email})
    if(user) return res.status(400).send('El usuario ya existe')
    user = new User ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    const result = await user.save()
    const jwtToken = user.generateJWT();// se le devuelve el token al usuario q ha realizado la petición
    res.status(200).send({jwtToken})
})

module.exports= router

