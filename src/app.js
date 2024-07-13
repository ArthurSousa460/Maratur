const express = require("express");



const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));




app.listen(PORT, (err) =>{
    if(err){
        console.log(err);
    }
    console.log("Server running http://127.0.0.1:3000")
})