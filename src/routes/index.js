import region from "./regionRoutes.js";
import express from "express";


export default app =>{
    app.use(
        express.json(),
        region
    )    
}