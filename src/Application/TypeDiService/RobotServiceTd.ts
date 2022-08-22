import {Service} from "typedi";

import IRobotServiceTd from "./IRobotServiceTd";

import ChairServiceTd from "./ChairServiceTd";

import logger from "../../Infrastructure/Logger/logger";
import HttpResponse from "../Utils/HttpResponse";
import HttpStatusCode from "../Utils/HttpStatusCode";


@Service()
class RobotServiceTd implements IRobotServiceTd{
    constructor(private chairService: ChairServiceTd) {}
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

export default RobotServiceTd;
