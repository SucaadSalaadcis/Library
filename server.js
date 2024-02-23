const express = require("express");
const mongoose = require("mongoose");
const bookModel = require("./models/bookModel");

const app = express();
app.use(express.json());

// Db 
mongoose.connect("mongodb://0.0.0.0:27017/Library").then(()=>{
    console.log("Database Connected...");
}).catch((error)=>{
    console.log(error);
})

// get
app.get("/allBooks" , async (req,res)=>{
   const bookData = await bookModel.find();
   if(bookData){
    res.send(bookData);
   }else(
    res.send("Not Found")
   )
});

// post
app.post("/createBook", async (req, res)=>{
  const createData = bookModel(req.body);
  const saveData = createData.save();
  if(saveData){
    res.send("Created...")
  }else {
    res.send("Not Created")
  }
});

// put
app.put("/updateBook:bId", async (req, res)=>{
   const updateData = bookModel.updateOne(
    {_id: req.params.bId},
    {$set : req.body}
   )
   if(updateData){
    res.send("Updated...")
   }else{
    res.send("Not Updated")
   }
})



app.listen(3000,()=> console.log("Server Is Running"))