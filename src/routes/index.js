import express from "express";
import region from "./regionRoutes.js";
import attractive from "./attractiveRoutes.js"
import image from "./imageRoutes.js";


export default app =>{
    app.use(
        express.json(),
        region,
        attractive,
        image
    )    
}