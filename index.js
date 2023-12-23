
const express=require('express')
const cors=require("cors")
const dbConnection=require("./db.js")
const eventRouter = require('./Router/eventRouter.js')

const app=express()
const PORT=8500

app.use(express.json())
app.use(cors())

dbConnection()


app.get("/",(req,res)=>{
   res.send("Server condition fine")

})

app.use("/events",eventRouter)


app.listen(PORT,()=>console.log(`server running on localhost:${PORT}`))