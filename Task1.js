const express=require("express");

const app=express();

app.use(express.static(__dirname+"/public"));

app.get("/",(req,res)=>{
        res.send("Hello from Express!");
    
});


app.listen(3000,()=>{
    console.log("Server is starting...");
});