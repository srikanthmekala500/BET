const userShema = require('../modules/userShema')
const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken")

const registercontroller =async (req,res)=>{
       
    try {
                const {name,email,password,city} = req.body
                //validation
                if(!name || !email || !password  || !city ){
                    return res.status(500).send({
                            success :false,
                            message:"please provide all fields "
                    })
                }
                //check exisiting user 
                    const exisitinguser = await userShema.findOne({email})
                        if(exisitinguser){
                            return res.status(500).send({
                                success:false,
                                message :"email already taken"
                            })
                        }



                 const user = await userShema.create({
                    name,
                    email,
                    password:
                    city,
                    

                 })
                 
                 res.status(201).send({
                    success:true,
                    message:"registeration successfull ",
                    user
                 })


        } catch (error) {
            console.log(error)
            res.status(500).send({
                success:false,
                message:"error  ",
                error
            })


        }
}

const logincontroller =async (req,res)=>{
    try {
    const {email,password}=req.body 
    //validation 
    if(!email||!password){
            return  res.status(500).send({
                success :false,
                message :"  invalid login detaiiles "
            })
        }
//check user 
        const user = await userShema.findOne({email})
        if(!user){
            return res.status(500).send({
                success :false,
                message :"email is not registered "
            })
        }
        
        // const match = await comparePassword(password,user.password)
        // if(!match){
        //     return res.status(500).send({
        //         success :false,
        //         message :"invalid password "
        //     })
        // }
    //token generation
        const token = await JWT.sign({_id:user.id},process.env.JWT_SECREAT,{expiresIn:'7d'})
        
        res.status(200).send({
            success :true,
            message :"login successfully",
            user:{
                _id:user._id,
                name :user.name,
                email:user.email,
                phone :user.phone,
                address:user.address,
                city:user.city
            },
            token
        })


} catch (error) {
            console.log(error)
            res.status(500).send({
                error,
                success :false,
                message :"login error",
                 
            })
    }
}

module.exports = {
    registercontroller,logincontroller
}
