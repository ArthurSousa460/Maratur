import express from "express";
import RegionController from "../controllers/RegionController.js";



const router = express.Router();
const regionController = new RegionController();

router.get("/region", (req,res) => regionController.searchRegion(req,res));





export default router;
