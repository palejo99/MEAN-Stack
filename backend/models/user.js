const mongoose= require ('mongoose') // consstante mongoose q requiere el paquete descargado
const jwt= require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type:String
    },
    date:{
        type:Date,
        default: Date.now
    }
})

userSchema.methods.generateJWT= function(){ //method.nombredelmetodo
    return jwt.sign({
        _id:this._id,
        name: this.name,
        email: this.email
    }, "secretKey")
}

const User= mongoose.model ('user',userSchema) //Nombre de la coleciión, y el esquema
module.exports.User= User
module.exports.userSchema=userSchema
