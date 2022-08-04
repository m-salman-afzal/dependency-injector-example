import e from "express";
import IRobotService from "../../src/Application/DemoServices/IRobotService";

import container from "../../src/Application/inversify.config";
import {TYPES} from "../../src/Application/Types";

import HttpResponse from "../../src/Application/Utils/HttpResponse";
import logger from "../../src/Infrastructure/Logger/logger";

const robotService = container.get<IRobotService>(TYPES.IRobotService);

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
