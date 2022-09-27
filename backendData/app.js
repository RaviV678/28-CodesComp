const express = require("express");
 require("./database/conn")
 const Student=require("./models/students");
 const Datagrid = require('./models/griddata');
 const app = express();
 const port = process.env.PORT || 8000;
 const cors = require('cors')
 app.use(cors());
app.use(express.json());

 app.post("/students",async (req , res)=>{
    try{

        console.log(req.body);
        const user = await new Student(req.body);
       const val = await user.save();
       res.json(val)
       
    }
    catch(e){
        res.send(e);
    }
  
 })

 app.get("/students",async (req , res)=>{
    try{
        const getD=req.body;
        console.log(getD);
        const std = await Student.find(getD);
        res.send(std);
        console.log(std);
    }catch(e){
        res.send(e);
    }
 })



//  data grid datA

app.post("/griddata",async (req , res)=>{
    try{

        console.log(req.body);
        const user = await new Datagrid(req.body);
       const val = await user.save();
       res.json(val)
       
    }
    catch(e){
        res.send(e);
    }
  
 })


 app.get("/griddata",async (req , res)=>{
    try{
        const getD=req.body;
        console.log(getD);
        const std = await Datagrid.find(getD);
        res.send(std);
        console.log(std);
    }catch(e){
        res.send(e);
    }
 })


 app.delete("/griddata/:_id", async (req,res)=>{
    try{
        const id=req.params._id;
        const deleteData= await Datagrid.findByIdAndDelete(id);
        if(!id){
            return res.send('incorrect Id');
        }
        res.send(deleteData)
    }catch(e){
        res.send(e);   
    }
 })

 app.patch("/griddata/:_id",async (req , res)=>{
    try{

        const id=req.params._id;
        const putdata=await Datagrid.findByIdAndUpdate(id,req.body);
       res.send(putdata)
    }
    catch(e){
        res.send(e);
    }
  
 })



  

 app.listen(port , ()=>{
    console.log(`connection is success full at port ${port}`)
 })

