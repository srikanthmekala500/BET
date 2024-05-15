const mongoose = require('mongoose')

const connectdb =async()=>{
    try {
            await mongoose.connect(process.env.MONOG_URL)
            console.log(`Mongodb connected ${mongoose.connection.host}`.bgMagenta.white)


    } catch (error) {
        console.log(`${error}` )
    }
}






module.exports = connectdb