import e from "express";
import {Container, Token} from "typedi";

import RobotService from "../../src/Application/DemoServices/RobotService";

import HttpResponse from "../../src/Application/Utils/HttpResponse";
import logger from "../../src/Infrastructure/Logger/logger";

const robotService = Container.get(RobotService);

class RobotController {
    static makeObject(request: e.Request, response: e.Response) {
        try {
            const httpResponse = robotService.makeObject();

            HttpResponse.convertToExpress(response, httpResponse);
        } catch (e) {
            logger.error(e.message);
        }
    }
}

export default RobotController;
