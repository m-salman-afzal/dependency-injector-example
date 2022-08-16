import {injectable, inject} from "inversify";

import {TYPES} from "../Types";

import IRobotServiceInv from "./IRobotServiceInv";

import ChairServiceInv from "./ChairServiceInv";

import logger from "../../Infrastructure/Logger/logger";
import HttpResponse from "../Utils/HttpResponse";
import HttpStatusCode from "../Utils/HttpStatusCode";


@injectable()
class RobotServiceInv implements IRobotServiceInv {
    constructor(@inject(TYPES.IChairServiceInv) private chairService: ChairServiceInv) {}
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

export default RobotServiceInv;
