import {injectable, inject} from "tsyringe";

import IRobotServiceTsy from "./IRobotServiceTsy";

import ChairServiceTsy from "./ChairServiceTsy";

import logger from "../../Infrastructure/Logger/logger";
import HttpResponse from "../Utils/HttpResponse";
import HttpStatusCode from "../Utils/HttpStatusCode";


@injectable()
class RobotServiceTsy implements IRobotServiceTsy{
    constructor(@inject("IChairServiceTsy") private chairService: ChairServiceTsy) {}
    makeObject() {
        try {
            const chairWithBack = this.chairService.hasBack(true);
            return HttpResponse.create(HttpStatusCode.OK, chairWithBack);
        } catch (e) {
            logger.error(e.message);
            return HttpResponse.create(HttpStatusCode.ERROR, {message: e.message});
        }
    }
}

export default RobotServiceTsy;
