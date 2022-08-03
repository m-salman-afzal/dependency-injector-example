import {Service, Inject} from "typedi";

import ChairService from "./ChairService";

import logger from "../../Infrastructure/Logger/logger";
import HttpResponse from "../Utils/HttpResponse";
import HttpStatusCode from "../Utils/HttpStatusCode";

@Service()
class RobotService {
    constructor(@Inject(() => ChairService) private chairService: ChairService) {}
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
