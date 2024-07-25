import express from "express";
import ImageController from "../controllers/ImageController.js";


const router = express.Router();
const imageController = new ImageController(); 



router.get("/images", (req, res) => imageController.getImages(req, res));




export default router;