import { Router } from "express";

const router = Router();

router.get("/", (req,res)=>{
    res.send("hey its user route")
})

export default router;