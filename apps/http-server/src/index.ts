import express from "express"
import {prisma1} from "@repo/db"
const app= express();
interface userEntry{
    username:string,
    password:string
}
app.post("/api/v1/signup",async(req , res)=>{
    const body=req.body;
    const email=body.email;
    const password=body.password;
    const user= await prisma1.user.create({
        email:email,
        name:password

    })
    

    res.send({
        msg:"hello from signup"
    })

})