const  mongoose =require('mongoose');

mongoose.connect("mongodb://localhost:27017/studentsApi").then(()=>{
    console.log('connected to data base')
}).catch((e)=>{
    console.log('Error to connect')
})
