const mongoose =require("mongoose");
const validator = require("validator");

const studentDataSchema = new mongoose.Schema({
    firstName : {
        type: String,
       
    },
    
     lastName:{
         type: String,
       
    },
    email:{
        type:String,
      
    },

    score:{
        type:String,
       
    },
    
})

const Datagrid = new mongoose.model('Datagrid',studentDataSchema);
module.exports = Datagrid;