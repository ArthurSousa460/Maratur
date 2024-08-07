import express from "express";
import AttractiveController from "../controllers/AttractiveController.js";


const router  = express.Router();
const attractive = new AttractiveController();


router.get("/attractive", (req, res) => attractive.searchAttractive(req, res));
router.get("/attractive/id", (req, res) => attractive.findAttractiveByid(req, res));


export default router;