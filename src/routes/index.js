import express from "express";
import region from "./regionRoutes.js";
import attractive from "./attractiveRoutes.js"


export default app =>{
    app.use(
        express.json(),
        region,
        attractive
    )    
}