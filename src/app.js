import express from "express";
import router from "./routes/index.js"
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
router(app);


app.listen(PORT, (err) =>{
    if(err){
        console.log(err);
    }
    console.log("Server running http://127.0.0.1:8080")
})