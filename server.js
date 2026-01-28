const express = require("express")
const nodemailer = require("nodemailer")
const path = require("path")

const app = express()

app.use(express.urlencoded([extended=true]))
app.use(express.json())

app.get("/" ,(req,res)=>[
 res.sendFile(path.join(__dirname,"./indeex.html"))
])

app.post("/send-email" , async(req ,res)=>{
    // app password = mnqi svvq qomt zito
 const {to, subject, body}=req.body;
 console.log(to, subject, body)
})
app.listen(2000,()=>[
    console.log("sever is running on port 2000")
])