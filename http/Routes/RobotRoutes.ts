import {Router} from "express";
import RobotController from "../Controllers/RobotController";

const router = Router();

router.get("/tsyringe", RobotController.makeTsyringeObject);
router.get("/inversify", RobotController.makeInversifyObject);
router.get("/typedi", RobotController.makeTypeDiObject);

export default router;
