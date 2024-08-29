import express from "express";

const router = express.Router();

router.get("/test", (req,res) =>{ //router.get() is a method to define a route that listens for GET requests on the specified path (/test in this case)
    console.log("router works!")
});

export default router;