const express = require ('express')
const mongoose = require ('mongoose')
const cors = require ('cors')
const user = require('./routes/user') // se importa route user
const auth= require ('./routes/auth')
const task= require ('./routes/task')

const app= express() // nuestra app ya puede usar express
app.use(cors())
app.use(express.json())
app.use('/api/user/',user)
app.use('/api/auth/',auth)
app.use('/api/task/',task)
app.use('/public',express.static('public'))

const port = process.env.PORT || 3003 // sea q este en una variable de entorno en el servidor o el el 3003 por defecto
app.listen(port, ()=> console.log('Escuchando por el puerto: ' + port))

mongoose.connect('mongodb://localhost/task',{useNewUrlParser:true,useFindAndModify:false,useCreateIndex:true,useUnifiedTopology:true}) // se indica ruta de la bd y el nombre de la bd
    .then(()=> console.log('Conectado a MongoDB'))
    .catch(error => console.log('No se ha conectado a MongoDB'))