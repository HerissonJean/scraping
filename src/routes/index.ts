import express from "express";
import { ScrapController } from "../controller";
const router = express.Router();

router.route("/scrap").get(ScrapController.scrap);

export default router;
