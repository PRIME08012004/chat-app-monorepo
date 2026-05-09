import express from "express"

const app= express();
interface userEntry{
    username:string,
    password:string
}
app.post("/api/v1/signup",(req , res)=>{
    const body=req.body;
    const email=body.email;
    const password=body.password;

})