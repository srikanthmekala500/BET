const BetShcema = require("../modules/BetShcema")

const Bet_MVD_Calculation  =async (req,res)=>{
        try {
            const {Product_Name,
                Endotoxin_Limit,
                Potency_of_Product,
                lysate,
                result,
                result1,
                result2,
                result3,
                result4,
                MVD
            } = req.body
            if(!Product_Name || !Endotoxin_Limit || !Endotoxin_Limit  || !Potency_of_Product ||!lysate ){
                return res.status(500).send({
                        success :false,
                        message:"please provide all fields "
                })
            }
            
            
             
               const BET = await BetShcema.create({
                Product_Name,
                Endotoxin_Limit,
                Potency_of_Product,
                lysate,
                result,
                result1,
                result2,
                result3,
                result4,
                MVD
               
             })

            res.status(201).send({
                success:true,
                message:"Add the values successfsull ",
                BET,
                result
               
               
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

//     try {
//         const data = await BetShcema.find({})
//         res.status(201).send({
//             success:true,
//             message:"GET BET VALUES successfull ",
//             data,
            
//          })
//     } catch (error) {
//         console.log(error)
//         res.status(500).send({
//             success:false,
//             message:"something wrong ",
//             error
//         })
//     }
// }// const Bet_MVD_Calculations = async (req,res)=>{

const Bet_MVD_Calculations =async(req,res)=>{
    try {
        const category = await BetShcema.find({})
        res.status(200).send({
            success: true,
            message: "All Categories List",
            category,
          });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success :false,
            message :"error in getallcategory",
            error
        })
    }
}


const Bet_MVD_ShowDilution=async(req,res)=>{
  
    try {
        const {id}= req.params
        const ShowDilution = await BetShcema.findById(id)
        res.status(200).send({
            success: true,
            message: "All Categories List",
            ShowDilution,
          });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success :false,
            message :"error in Bet_MVD_ShowDilution",
            error
        })
    }
}

const Bet_MVD_Delete=async(req,res)=>{
  
    try {
        const {id}= req.params
        const delet = await BetShcema.findByIdAndDelete(id)
        res.status(200).send({
            success: true,
            message: "DELETE successfull",
            delet
          });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success :false,
            message :"error in DELETE",
            error
        })
    }
}

module.exports = {
    Bet_MVD_Calculation,Bet_MVD_Calculations,Bet_MVD_ShowDilution,Bet_MVD_Delete
}