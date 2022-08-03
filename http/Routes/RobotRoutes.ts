import {Router} from "express";
import RobotController from "../Controllers/RobotController";

const router = Router();

router.get("/", RobotController.makeObject);

export default router;
