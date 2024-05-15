const mongoose = require('mongoose')


const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
      },
      email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email already taken"],
      },
      password: {
        type: String,
        required: [true, "password is required"],
        // minLength: [6, "password length should be greadter then 6 character"],
      },
      
      city: {
        type: String,
        // required: [true, "city name is required"]
      }
},
{ timestamps: true }
)


// //fuynctuions
// // hash func closure expl aslo
// userShema.pre("save",async function(next){
//     //isModified mongoose funation
//     if(!this.isModified("passowrd"))return next()
//         this.password =await bcrypt.hash(this.password, 10)
//   })
// // compare function
// userShema.methods.comparePassword = async function(plainPassword){
//   return await bcrypt.compare(plainPassword,this.password)
// }

// //JWT Token
// userShema.methods.generateJWT = function(){
// return JWT.sign({_id:this.id},process.env.JWT_SECRET,{expiresIn:"1d"})
// }

module.exports = mongoose.model("userShema",userShema)