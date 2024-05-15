const mongoose = require('mongoose')
const BetShcema = new mongoose.Schema({
    Product_Name: {
        type: String,
         
      },
    Endotoxin_Limit: {
        type: Number,
        required: [true, "Endotoxin_Limit is required"],
      },
      Potency_of_Product: {
        type: Number,
        required: [true, "Potency_of_Product is required"],
         
      },
      lysate: {
        type: Number,
        required: [true, "lyset is required"],
        // minLength: [6, "password length should be greadter then 6 character"],
      },
      result: {
        type: Object,
         
        // minLength: [6, "password length should be greadter then 6 character"],
      },
      result1: {
        type: Array,
         
        // minLength: [6, "password length should be greadter then 6 character"],
      },
      result2: {
        type: Array,
         
        // minLength: [6, "password length should be greadter then 6 character"],
      },
      result3: {
        type: Array,
         
        // minLength: [6, "password length should be greadter then 6 character"],
      },
      result4: {
        type: Array,
         
        // minLength: [6, "password length should be greadter then 6 character"],
      },
      MVD: {
        type: Array,
         
        // minLength: [6, "password length should be greadter then 6 character"],
      },


},{ timestamps: true }

)

module.exports = mongoose.model("BetShcema",BetShcema)