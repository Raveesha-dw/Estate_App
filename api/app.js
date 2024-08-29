import express from "express";
import postRoute from "./routes/post.route.js";

const app = express();

app.use("/api/post", postRoute); 
// using seperate api endpoints for each function
// app.use("/api/test", (req,res) => {
//    res.send("It Works!") 
// })

app.listen(8800, () =>{
    console.log("Server is running");
    // console.log("fdfj");
});

