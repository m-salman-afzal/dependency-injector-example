import e from "express";
import {container} from "tsyringe";

import ChairServiceTsy from "../../src/Application/TSyringeService/ChairServiceTsy";

// When you need to inject another class with different implementation, use ChairServiceNew
import ChairServiceNewTsy from "../../src/Application/Common/ChairServiceNewTsy";

import RobotServiceTsy from "../../src/Application/TSyringeService/RobotServiceTsy";

import HttpResponse from "../../src/Application/Utils/HttpResponse";
import logger from "../../src/Infrastructure/Logger/logger";

// Use ChairServiceNew if you want to replace dependency in regards to DIP
container.register("IChairServiceTsy", {useClass: ChairServiceTsy})
const robotServiceTsy = container.resolve(RobotServiceTsy);

class RobotController {
    static makeTsyringeObject(request: e.Request, response: e.Response) {
        try {
            const httpResponse = robotServiceTsy.makeObject();

            HttpResponse.convertToExpress(response, httpResponse);
        } catch (e) {
            logger.error(e.message);
        }
    }
}

export default RobotController;
