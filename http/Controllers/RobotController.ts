import e from "express";
import {container} from "tsyringe";
import {Container} from "typedi"

import containerInv from "../../src/Application/InversifyService/inversify.config";
import {TYPES} from "../../src/Application/Types";

import IRobotServiceInv from "../../src/Application/InversifyService/IRobotServiceInv";

import ChairServiceTsy from "../../src/Application/TSyringeService/ChairServiceTsy";
import RobotServiceTsy from "../../src/Application/TSyringeService/RobotServiceTsy";
import RobotServiceTd from "../../src/Application/TypeDiService/RobotServiceTd";

import HttpResponse from "../../src/Application/Utils/HttpResponse";
import logger from "../../src/Infrastructure/Logger/logger";

// (for TSyringe) When you need to inject another class with different implementation, use ChairServiceNew
import ChairServiceNewTsy from "../../src/Application/Common/ChairServiceNewTsy";

// (for TSyringe) Use ChairServiceNew if you want to replace dependency in regards to DIP
container.register("IChairServiceTsy", {useClass: ChairServiceTsy});
const robotServiceTsy = container.resolve(RobotServiceTsy);

// (for Inverisfy)
const robotServiceInv = containerInv.get<IRobotServiceInv>(TYPES.IRobotServiceInv);

// (for TypeDi)
const robotServiceTd = Container.get(RobotServiceTd) 

class RobotController {
    static makeTsyringeObject(request: e.Request, response: e.Response) {
        try {
            const httpResponse = robotServiceTsy.makeObject();

            HttpResponse.convertToExpress(response, httpResponse);
        } catch (e) {
            logger.error(e.message);
        }
    }

    static makeInversifyObject(request: e.Request, response: e.Response) {
        try {
            const httpResponse = robotServiceInv.makeObject();

            HttpResponse.convertToExpress(response, httpResponse);
        } catch (e) {
            logger.error(e.message);
        }
    }

    static makeTypeDiObject(request: e.Request, response: e.Response) {
        try {
            const httpResponse = robotServiceTd.makeObject();

            HttpResponse.convertToExpress(response, httpResponse);
        } catch (e) {
            logger.error(e.message);
        }
    }
}

export default RobotController;
