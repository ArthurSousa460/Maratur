import express from "express";
import router from "./routes/index.js"


const app = express();
const PORT = 3000;


router(app);


app.listen(PORT, (err) =>{
    if(err){
        console.log(err);
    }
    console.log("Server running http://127.0.0.1:3000")
})