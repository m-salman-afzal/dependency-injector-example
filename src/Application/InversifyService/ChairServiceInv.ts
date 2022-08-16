import {injectable} from "inversify";

import IChairServiceInv from "./IChairServiceInv";

import logger from "../../Infrastructure/Logger/logger";

@injectable()
class ChairServiceInv implements IChairServiceInv {
    numberOfLegs(number: number) {
        try {
            console.log(`Chair Service Inversify: This chair has ${number} legs`);
            return `Chair Service Inversify: This chair has ${number} legs`;
        } catch (e) {
            logger.error(e.message);
        }
    }

    hasBack(exists: boolean) {
        try {
            console.log(`Chair Service Inversify: Does this chair has a back? ${exists}`);
            return `Chair Service Inversify: Does this chair has a back? ${exists}`;
        } catch (e) {
            logger.error(e.message);
        }
    }

    hasCushion(exists: boolean) {
        try {
            console.log(`Chair Service Inversify: Does this chair has a cushion? ${exists}`);
            return `Chair Service Inversify: Does this chair has a cushion? ${exists}`;
        } catch (e) {
            logger.error(e.message);
        }
    }
}
export default ChairServiceInv;
