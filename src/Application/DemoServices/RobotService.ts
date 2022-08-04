import {injectable, inject} from "inversify";

import IRobotService from "./IRobotService";
import {TYPES} from "../Types"

import ChairService from "./ChairService";

import logger from "../../Infrastructure/Logger/logger";
import HttpResponse from "../Utils/HttpResponse";
import HttpStatusCode from "../Utils/HttpStatusCode";


@injectable()
class RobotService implements IRobotService{
    constructor(@inject(TYPES.IChairService) private chairService: ChairService) {}
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

export default RobotService;
