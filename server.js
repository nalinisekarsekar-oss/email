const express = require("express")
const nodemailer = require("nodemailer")
const path = require("path")

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/" ,(req,res)=>[
 res.sendFile(path.join(__dirname,"./indeex.html"))
])

app.post("/send-email" , async(req ,res)=>{
    // app password = mnqi svvq qomt zito
 const {to, subject, body}=req.body;
 console.log(to, subject, body)
  try {
       const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: "465",
      secure: true, 
      auth: {
        user: "nalinisekarsekar@gmail.com",
        pass: "mnqisvvqqomtzito"
      },
      tls: {
        rejectUnauthorized: false
      }
        });


       const mailoptions = {
      from: "nalinisekarsekar@gmail.com",
      to: to,
       subject: subject,
      text: body
    };
    await transporter.sendMail(mailoptions)

    res.send("mail send successfully")
     }catch(err){
    console.log(err)
     }
})
app.listen(2000,()=>[
    console.log("sever is running on port 2000")
])