const express=require("express")

const app=express()


const {connection}=require("./config/db")
const cors=require("cors")
const {jobRouter}=require("./Router/Job.router")
require("dotenv").config()

const PORT=process.env.PORT || 8400

app.use(cors())

app.use(express.json())

app.get('/',(req,res) => {
  res.send("welcome")
})

app.use("/job",jobRouter)

app.listen(PORT,async()=>{
  try{
    await connection
    console.log("db is connect sucessfully")
  }
  catch(err){
    console.log("db is fail")
    console.log(err)
  }
  console.log(`${PORT} runing succesful`)
})