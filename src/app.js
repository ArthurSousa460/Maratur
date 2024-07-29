import express from "express";
import router from "./routes/index.js"
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

app.use(cors());
router(app);


app.listen(PORT,HOST, (err) =>{
    if(err){
        console.log(err);
    }
    console.log(`Server running http://${HOST}:8080`)
})