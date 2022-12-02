import { Router } from "express";
import User from "../models/User.js"

const router = Router();

//REGISTER
router.get("/register", async (req,res)=>{
    const user = await new User({
        username:"john",
        email:"john@gmail.com",
        password:"123456" 
    })

    await user.save();
    res.send("ok");
});

export default router;