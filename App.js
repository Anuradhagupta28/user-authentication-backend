const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const bodyParser = require('body-parser');
const {connectDataBase}=require("./Config/db")
const {router} =require("./Routes/userRoute")

const app = express();

app.use(express.json());////////
app.use(cors()); //////





const port = process.env.PORT || 5000;
connectDataBase()
.then(()=>{
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)});
})
app.use("/",router);
app.get("/",async(req,res)=>{
  res.send("<h1>succesfully work</h1>")
})

