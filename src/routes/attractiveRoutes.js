import express from "express";
import AttractiveController from "../controllers/AttractiveController.js";


const router  = express.Router();
const attractive = new AttractiveController();


router.get("/attractives/:name", (req, res) => attractive.searchAttractive(req, res));


export default router;